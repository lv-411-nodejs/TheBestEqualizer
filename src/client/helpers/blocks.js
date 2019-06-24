import Pizzicato from "pizzicato";

const BLOCKS = [
  {
    name: 'Distortion',
    effects: {gain: 0},
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0
    })
  },
  {
    name: 'Reverb',
    effects: {
      time: 0,
      decay: 0,
      mix: 0
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0,
      decay: 0,
      mix: 0
    })
  },
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0
    })
  },
  {
    name: 'Flanger',
    effects: {
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0
    })
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 0,
      depth: 0,
      mix: 0
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 0,
      depth: 0,
      mix: 0
    })
  }
];

export default BLOCKS;
