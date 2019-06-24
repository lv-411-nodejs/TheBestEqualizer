import React, {Component} from 'react';
import './alllBlocks.css';

import BlockOfSliders from './blockOfSliders';
import PlayButton from './playButton';
import StopButton from './stopButton';

import BLOCKS from '../../../helpers/blocks';
import Pizzicato from "pizzicato";


class AllBlocks extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      sound: new Pizzicato.Sound({
        source: 'file',
        options: { path: require('../../../sounds/sound.mp3') }
        },
        () => BLOCKS.forEach(({createEffect}) => {
          this.state.sound.addEffect(createEffect);
            })
      ),
      playing: false,
    };
  }

  play = () => {
    this.setState({
      playing: !this.state.playing});
    !this.state.playing ? this.state.sound.play() : this.state.sound.pause();
  };

  stop = () => {
    this.setState({playing: false});
    this.state.sound.stop();
  };

  setEffectsValue = (blockName, effectsName, value) => {
    BLOCKS.forEach( ({name, effects, createEffect}) => {
      if(name === blockName){
        effects[effectsName] = value;
        createEffect[effectsName] = effects[effectsName];
      }
    });
  };

  render() {
    const { sound, playing } = this.state;
    return (
      <div className="SlidersComponent__main--container">
        <div className="Sliders">
          {BLOCKS.map(({ name, effects, createEffect }, i) => (
            <BlockOfSliders
              name={name}
              effects={effects}
              createEffect={createEffect}
              key={i}
              sound={sound}
              setEffectsValue={this.setEffectsValue}
            />))}
        </div>
        <div>
          <PlayButton onClick={this.play} playing={playing}/>
          <StopButton onClick={this.stop}/>
        </div>
      </div>
    );
  }
}

export default AllBlocks;
