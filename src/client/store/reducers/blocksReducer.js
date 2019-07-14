import Pizzicato from 'pizzicato';
import {
  SET_VISIBILITY,
} from '../actions/types';

const initialState = [
  {
    name: 'Delay',
    options: {
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
    options: {
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
    options: {
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
    options: { gain: 0 },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    options: {
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
    options: {
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
    options: {
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
    options: {
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
    options: { pan: 0 },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    options: {
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
    options: {
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
    options: {
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
    options: {
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
    case SET_VISIBILITY:
      return state.map(block => (block.name === blockName
        ? { ...block, isVisible: !block.isVisible }
        : block));

    default:
      return state;
  }
}
