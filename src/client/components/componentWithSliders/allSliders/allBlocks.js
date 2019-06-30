import React, { Component } from 'react';
import Pizzicato from 'pizzicato';

import BlockOfSliders from './blockOfSliders';
import UploadSongButton from '../../uploadSongButton';
import Button from './button';
import { pauseIcon, playIcon, stopIcon } from '../../../assets/icons/icons';
import { BLOCKS } from '../../../helpers/constants';
import Sound from '../../../sounds/sound.mp3';
import './alllBlocks.css';

class AllBlocks extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sound: new Pizzicato.Sound(Sound,
        () => BLOCKS.forEach(({ createEffect }) => {
          const { sound } = this.state;
          sound.addEffect(createEffect);
        })),
      isPlaying: false,
    };
  }

  play = () => {
    this.setState({ isPlaying: true });
    const { sound } = this.state;
    sound.play();
  };

  pause = () => {
    this.setState({ isPlaying: false });
    const { sound } = this.state;
    sound.pause();
  };

  stop = () => {
    this.setState({ isPlaying: false });
    const { sound } = this.state;
    sound.stop();
  };

  setEffectsValue = (blockName, effectsName, value) => {
    BLOCKS.forEach(({ name, effects, createEffect }) => {
      if (name === blockName) {
        effects[effectsName] = value;
        createEffect[effectsName] = effects[effectsName];
      }
    });
  };

  render() {
    const { sound, isPlaying } = this.state;

    // const PlayButton = (
    //   <Button
    //     className="PlayButton"
    //     onClick={this.play}
    //     icon={playIcon}
    //     value="Play"
    //   />
    // );

    // const PauseButton = (
    //   <Button
    //     className="PauseButton"
    //     onClick={this.pause}
    //     icon={pauseIcon}
    //     value="Pause"
    //   />
    // );

    // const StopButton = (
    //   <Button
    //     className="StopButton"
    //     onClick={this.stop}
    //     icon={stopIcon}
    //     value="Stop"
    //   />
    // );

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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AllBlocks;
