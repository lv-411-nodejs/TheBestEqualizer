import React, {Component} from 'react';
import './alllBlocks.css';

import BlockOfSliders from './blockOfSliders';
import Button from './button';
import { pauseIcon, playIcon, stopIcon } from '../../../assets/icons/icons';

import { BLOCKS } from '../../../helpers/constants';
import Pizzicato from "pizzicato";
import Sound from '../../../sounds/sound.mp3';


class AllBlocks extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      sound: new Pizzicato.Sound(Sound,
        () => BLOCKS.forEach( ({createEffect}) => {
          this.state.sound.addEffect(createEffect);
        })),
      isPlaying: false,
    };
  }

  play = () => {
    this.setState({isPlaying: true});
    this.state.sound.play();
  };

  pause = () => {
    this.setState({isPlaying: false});
    this.state.sound.pause();
  };

  stop = () => {
    this.setState({isPlaying: false});
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

  PlayButton =
    <Button
      className="PlayButton"
      onClick={this.play}
      icon={playIcon}
      value='Play'
    />;

  PauseButton =
    <Button
      className="PauseButton"
      onClick={this.pause}
      icon={pauseIcon}
      value='Pause'
    />;

  StopButton =
    <Button
      className="StopButton"
      onClick={this.stop}
      icon={stopIcon}
      value='Stop'
    />;

  render() {
    const { sound, isPlaying } = this.state;
    const {PlayButton, PauseButton, StopButton} = this;
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
        <div className="Buttons">
          {isPlaying ? PauseButton : PlayButton}
          {StopButton}
        </div>
      </div>
    );
  }
}

export default AllBlocks;
