import React, {Component} from 'react';
import 'react-rangeslider/lib/index.css';
import './trackDuration.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import VolumeComponent from '../volumeComponent/volumeComponent';
import SwitcherSound from '../switcherSound/switcherSound';

class TrackDuration extends Component {
    
    state = {
        duration: null,
        currentTime: null,
        playing: false,
        startPlayTime: null,
        onToggle: true,
    }

    formatingSongTime = (seconds) => {
        seconds %= 3600;
        let min = (Math.floor(seconds / 60)).toFixed();
        let sec = (seconds % 60).toFixed();
        
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        return `${min}:${sec}`
    }

    calculateCurrentTime = () => {
        if (this.state.currentTime >= this.state.duration){
            return;
        }
        let currentTime = new Date();
        let currentDifference = Math.round((currentTime.getTime() - this.state.startPlayTime.getTime())/1000)
        if(currentDifference !== this.state.currentTime){
            console.log("AAA", this.state.playing )
            if (this.state.playing){
                this.setState({currentTime: currentDifference},
                () => this.calculateCurrentTime())
            } 
        } else {
            setTimeout(this.calculateCurrentTime, 1000);
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { audioData } = props;
        if (audioData.sound && audioData.sound.sourceNode) {
                if(state.startPlayTime === null && audioData.sound.playing) {
                    return {
                        startPlayTime: new Date(),
                        duration: Math.round(audioData.sound.sourceNode.buffer.duration),
                        playing: audioData.sound.playing,
                        trackName: audioData.trackName,
                    }
                }
                return {
                    duration: Math.round(audioData.sound.sourceNode.buffer.duration),
                    playing: audioData.sound.playing,
                    trackName: audioData.trackName,
                }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState.playing);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.playing !== undefined && !prevState.playing && this.state.playing){
            this.setState({startPlayTime: new Date(new Date() - prevState.currentTime*1000)})
        }
        if(this.state.startPlayTime) {
            this.calculateCurrentTime()
            console.log(this.state.startPlayTime)
        }
        if(prevState.trackName !== this.state.trackName) {
            this.setState({startPlayTime: new Date() })
        }
    }

    setPauseOnSound = () => {
        const {audioData} = this.props;
        if(!this.props.audioData.sound.paused) {
            !audioData.sound.paused && audioData.sound.pause();
            this.setState({
                playing: false,
                onToggle: false,
            });
        }
    }

    setPlayOnSound = () => {
        const {audioData} = this.props;
        if(!this.state.onToggle) {
            !audioData.sound.playing && audioData.sound.play()
            this.setState({
                playing: true,
                onToggle: true,
            });
        }
    }

    changeCurrentTimeOfSong = (time) => {
        const {audioData} = this.props;
        if(audioData.sound){
            audioData.sound.offsetTime = time;
        }  
    }

    setCurrentTime = (currentTime) => {
        this.setState({
            currentTime: currentTime,
        }, () => this.changeCurrentTimeOfSong(currentTime))
    }

    render() {
        const {currentTime, duration} = this.state;
        const { audioData } = this.props
        let formatedDurationTime = '00:00';
        let formatedCurrentTime = '00:00';
        if (duration){
            formatedDurationTime = this.formatingSongTime(duration);
        }
        if (currentTime){
            formatedCurrentTime = this.formatingSongTime(currentTime);
        }
        const minSliderVolume = 0;
        const stepSliderVolume = 0.001;
        return (
            <div className="DurationContainer">
                <div className="DurationContainerFlexChild">
                    <div className="Timer">
                        {formatedCurrentTime} / {formatedDurationTime}
                    </div>
                    <Slider 
                        className="DurationContainer--slider"
                        value={currentTime}
                        tooltip={false}
                        min={minSliderVolume}
                        max={duration}
                        step={stepSliderVolume}
                        onChangeStart={audioData.sound && this.setPauseOnSound}
                        onChange={audioData.sound && this.setCurrentTime}
                        onChangeComplete={audioData.sound && this.setPlayOnSound}
                    />
                </div>
                {audioData.sound && (audioData.voice.playing && audioData.sound.playing) ? ( 
                <SwitcherSound />): (<VolumeComponent />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    audioData: state.audioData,
});

export default connect(mapStateToProps)(TrackDuration);
