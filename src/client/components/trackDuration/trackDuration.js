import React, {Component} from 'react';
import './trackDuration.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

class TrackDuration extends Component {
    
    state = {
        duration: null,
        currentTime: null,
    }

    formaterTimeOfSong = (seconds) => {
        let songminutes; 
        let songseconds;
        if (seconds > 60){
            songminutes = (seconds / 60).toFixed();
            songseconds = seconds - (songminutes * 60);
            return `${songminutes}:${songseconds}`
        } else {
        		songseconds = seconds;
            return `00:${songseconds}`
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { audioData } = props;
        if (audioData.sound) {
            if (audioData.sound.sourceNode){
                console.log(audioData.sound.sourceNode.buffer.duration)
                return {
                    duration: this.formaterTimeOfSong(audioData.sound.sourceNode.buffer.duration),
                }
            } 
        return null;
        }
    }

    durationValueTrack = (props) => {
        const { audioData } = props;
        this.setState( {duration: audioData.sound.sourceNode.buffer.duration})
    }

    render() {
        const {duration} = this.state;
        const minSliderVolume = 0;
        const stepSliderVolume = 0.001;
        return (
            <div className="DurationContainer">
                <span>Cur / Dur</span>
                <Slider 
                    className="DurationContainer--slider"
                    value={this.durationValueTrack}
                    min={minSliderVolume}
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
