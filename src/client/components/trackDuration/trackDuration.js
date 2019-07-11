import React, {Component} from 'react';
import 'react-rangeslider/lib/index.css';
import './trackDuration.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

class TrackDuration extends Component {
    
    state = {
        duration: null,
        currentTime: null,
    }

    formatingSongTime = (seconds) => {
        seconds %= 3600;
        let min = (Math.floor(seconds / 60)).toFixed();
        let sec = (seconds % 60).toFixed();
        
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        return `${min}:${sec}`
    }

    static getDerivedStateFromProps(props, state) {
        const { audioData } = props;
        if(audioData.sound){
            console.log(audioData.sound);
        }
        if (audioData.sound) {
            if (audioData.sound.sourceNode){
                console.log('Song duration:' + audioData.sound.sourceNode.buffer.duration)
                return {
                    duration: audioData.sound.sourceNode.buffer.duration,
                    audioData: audioData.sound,
                }
            } 
        return null;
        }
    }

    componentDidMount() {
        let timer;
        timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({
            currentTime: this.state.currentTime + 1,
        })
    }

    render() {
        const {currentTime, duration, audioData} = this.state;
        let formatedDurationTime = '00:00';
        let formatedCurrentTime = '00:00';
        if(audioData){
            audioData.lastTimePlayed = -22;
        }
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
                <span>{formatedCurrentTime} / {formatedDurationTime}</span>
                <Slider 
                    className="DurationContainer--slider"
                    value={currentTime}
                    min={minSliderVolume}
                    max={duration}
                    step={stepSliderVolume}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    audioData: state.audioData,
});

export default connect(mapStateToProps)(TrackDuration);
