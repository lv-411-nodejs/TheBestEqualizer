import React, {Component} from 'react';
import './trackDuration.css';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';

class TrackDuration extends Component {
    
    state = {
        duration: null,
    }

    durationValueTrack = (props) => {
        const { SoundStrema } = props;
        this.setState( {duration: SoundStream.track.sourceNode.buffer})

    }

    render() {
        console.log('Hi')
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