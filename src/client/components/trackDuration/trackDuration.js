import React, {Component} from 'react';
import 'react-rangeslider/lib/index.css';
import './trackDuration.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

class TrackDuration extends Component {
    
    state = {
        duration: null,
        currentTime: null,
        playing: false,
        startPlayTime: null,
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
        console.log('calc', this.state.currentTime)
        let currentTime = new Date();
        console.log(`currentTime: ${currentTime.getTime()}, startPlayTime: ${this.state.startPlayTime.getTime()}`)
        let currentDifference = Math.floor((currentTime.getTime() - this.state.startPlayTime.getTime())/1000)
        console.log(currentDifference)
        if(currentDifference !== this.state.currentTime){
            console.log(this.state.currentTime)
            if (this.state.playing){
                this.setState({currentTime: currentDifference},
                () => this.calculateCurrentTime())
            } else {
                // let PauseTime = new Date();
                // this.setState({startPlayTime: this.state.startPlayTime + PauseTime.getTime()})
            }
        } else {
            setTimeout(this.calculateCurrentTime, 1000);
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { audioData } = props;
        if (audioData.sound) {
            if (audioData.sound.sourceNode){
                if(state.startPlayTime === null && audioData.sound.playing) {
                    return {
                        startPlayTime: new Date(),
                        duration: audioData.sound.sourceNode.buffer.duration,
                        playing: audioData.sound.playing
                    }
                }
                return {
                    duration: audioData.sound.sourceNode.buffer.duration,
                    playing: audioData.sound.playing
                }
            } 
        return null;
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.state !== nextState)
    //     return this.state !== nextState;
    // }

    componentDidUpdate(prevState) {
        if(this.state.startPlayTime) {
            this.calculateCurrentTime()
        }

        // let timer;
        // console.log(this.state.playing)
        // if (this.state.playing){
        //     timer = setInterval(() => {
        //         this.tick();
        //     }, 1000);
        //     console.log(timer);
        // }
    }

    // tick() {
    //     this.setState({
    //         currentTime: this.state.currentTime + 1,
    //     })
    // }

    render() {
        const {currentTime, duration} = this.state;
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
