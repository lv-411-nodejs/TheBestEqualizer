import React, { Component } from 'react';
import Pizzicato from 'pizzicato';
import BlockOfSliders from './blockOfSliders';
import { BLOCKS } from '../../../helpers/constants';
import Sound from '../../../sounds/sound.mp3';
import './alllBlocks.css';

class AllBlocks extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sound: new Pizzicato.Sound(Sound, this.runSound),
    };
  }

  runSound = () => BLOCKS.forEach(({ createEffect }) => {
    const { sound } = this.state;
    sound.addEffect(createEffect);
  });

  setEffectsValue = (blockName, effectsName, value) => {
    BLOCKS.forEach(({ name, effects, createEffect }) => {
      if (name === blockName) {
        effects[effectsName] = value;
        createEffect[effectsName] = effects[effectsName];
      }
    });
  };

  render() {
    const { sound } = this.state;

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
