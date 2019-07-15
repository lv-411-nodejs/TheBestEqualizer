import Pizzicato from 'pizzicato';
import {
  SET_VISIBILITY,
  SET_ROCK_PRESET,
  SET_JAZZ_PRESET,
  SET_RAP_PRESET,
} from '../actions/types';

const initialState = [
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0,
        time: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0,
      time: 0,
      cutoff: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0,
        time: 0,
        cutoff: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: { gain: 0 },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0,
      midLowGain: 0,
      midHighGain: 0,
      highGain: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0,
      midLowGain: 0,
      midHighGain: 0,
      highGain: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 0,
      decay: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0,
      decay: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 0,
      depth: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 0,
      depth: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: { pan: 0 },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 0,
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 0,
      peak: 0,
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 0,
      peak: 0,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 0,
      peak: 0,
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 0,
      peak: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0,
      distortion: 0,
      mix: 0,
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0,
      mix: 0,
    }),
    isVisible: false,
  },
];

export default function (state = initialState, action) {
  const { blockName } = action;

  switch (action.type) {
    case SET_ROCK_PRESET: {
      const newState = initialState.map((currentEffect) => {
        if (currentEffect.name === 'Distortion') {
          currentEffect = { ...currentEffect, name: 'Distortion1' };
          currentEffect.effects = {
            ...currentEffect.effects,
            gain: 1,
          };
        }
        return currentEffect;
      });
      return newState;
    }

    case SET_JAZZ_PRESET: {
      const newState = initialState.map((currentEffect) => {
        if (currentEffect.name === 'Reverb') {
          currentEffect = { ...currentEffect, name: 'Reverb1' };
          currentEffect.effects = {
            ...currentEffect.effects,
            time: 0.1,
            decay: 0.2,
            mix: 0.3,
          };
        }
        return currentEffect;
      });
      return newState;
    }

    case SET_RAP_PRESET: {
      const newState = initialState.map((currentEffect) => {
        if (currentEffect.name === 'Flanger') {
          currentEffect = { ...currentEffect, name: 'Flanger1' };
          currentEffect.effects = {
            ...currentEffect.effects,
            time: 0.1,
            speed: 0.3,
            depth: 0.5,
            feedback: 0.7,
            mix: 0.9,
          };
        }
        return currentEffect;
      });
      return newState;
    }
    case SET_VISIBILITY:
      return state.map(block => (block.name === blockName
        ? { ...block, isVisible: !block.isVisible }
        : block));

    default:
      return state;
  }
}
