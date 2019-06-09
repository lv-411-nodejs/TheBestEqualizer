import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SoundSettings from '../../components/SoundSettings/SoundSettings';
import Modes from '../../components/Modes/Modes';
import AudioWave from '../../components/AudioWave/AudioWave';
import Equalizer from '../../components/Equalizer/Equalizer';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
              <Header/>
              <SoundSettings/>
              <Modes/>
              <AudioWave/>
              <Equalizer/>
            </React.Fragment>
        );
    }
}

export default Main;