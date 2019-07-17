import Pizzicato from 'pizzicato';

export const fieldsInfo = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    isMember: false,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    isMember: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    isMember: true,
  },
  {
    type: 'password',
    name: 'passwordConfirmation',
    label: 'Pasword confirmation',
    isMember: false,
  },
];

export const JAZZ_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 1,
      time: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 1,
      time: 1,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 1,
      time: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 1,
        time: 1,
        mix: 1,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 1,
      time: 1,
      cutoff: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 1,
        time: 1,
        cutoff: 1,
        mix: 1,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: { gain: 1 },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 1,
      midLowGain: 1,
      midHighGain: 1,
      highGain: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 1,
      midLowGain: 1,
      midHighGain: 1,
      highGain: 1,
      mix: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Flanger',
    effects: {
      time: 1,
      speed: 1,
      depth: 1,
      feedback: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 1,
      speed: 1,
      depth: 1,
      feedback: 1,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 1,
      decay: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 1,
      decay: 1,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 1,
      depth: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 1,
      depth: 1,
      mix: 1,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: { pan: 0 },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: 1,
      knee: 1,
      attack: 1,
      release: 1,
      ratio: 1,
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 1,
      knee: 1,
      attack: 1,
      release: 1,
      ratio: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 1,
      peak: 1,
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 1,
      peak: 1,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 1,
      peak: 1,
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 1,
      peak: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 1,
      distortion: 1,
      mix: 1,
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 1,
      distortion: 1,
      mix: 1,
    }),
    isVisible: false,
  },
];

export const ROCK_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0.5,
      time: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0.5,
      time: 0.5,
      mix: 0.5,
    }),
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0.5,
      time: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0.5,
        time: 0.5,
        mix: 0.5,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0.5,
      time: 0.5,
      cutoff: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0.5,
        time: 0.5,
        cutoff: 0.5,
        mix: 0.5,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: { gain: 0.5 },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0.5,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0.5,
      midLowGain: 0.5,
      midHighGain: 0.5,
      highGain: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0.5,
      midLowGain: 0.5,
      midHighGain: 0.5,
      highGain: 0.5,
      mix: 0.5,
    }),
    isVisible: false,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0.5,
      speed: 0.5,
      depth: 0.5,
      feedback: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0.5,
      speed: 0.5,
      depth: 0.5,
      feedback: 0.5,
      mix: 0.5,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 0.5,
      decay: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0.5,
      decay: 0.5,
      mix: 0.5,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 0.5,
      depth: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 0.5,
      depth: 0.5,
      mix: 0.5,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: { pan: 0.5 },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0.5,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: 0.5,
      knee: 0.5,
      attack: 0.5,
      release: 0.5,
      ratio: 0.5,
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0.5,
      knee: 0.5,
      attack: 0.5,
      release: 0.5,
      ratio: 0.5,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 0.5,
      peak: 0.5,
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 0.5,
      peak: 0.5,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 0.5,
      peak: 0.5,
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 0.5,
      peak: 0.5,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0.5,
      distortion: 0.5,
      mix: 0.5,
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0.5,
      distortion: 0.5,
      mix: 0.5,
    }),
    isVisible: false,
  },
];

export const POP_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0.7,
      time: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0.7,
      time: 0.7,
      mix: 0.7,
    }),
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0.7,
      time: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0.7,
        time: 0.7,
        mix: 0.7,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0.7,
      time: 0.7,
      cutoff: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0.7,
        time: 0.7,
        cutoff: 0.7,
        mix: 0.7,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: { gain: 0.7 },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0.7,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0.7,
      midLowGain: 0.7,
      midHighGain: 0.7,
      highGain: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0.7,
      midLowGain: 0.7,
      midHighGain: 0.7,
      highGain: 0.7,
      mix: 0.7,
    }),
    isVisible: false,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0.7,
      speed: 0.7,
      depth: 0.7,
      feedback: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0.7,
      speed: 0.7,
      depth: 0.7,
      feedback: 0.7,
      mix: 0.7,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 0.7,
      decay: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0.7,
      decay: 0.7,
      mix: 0.7,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 0.7,
      depth: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 0.7,
      depth: 0.7,
      mix: 0.7,
    }),
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: { pan: 0.7 },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0.7,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: 0.7,
      knee: 0.7,
      attack: 0.7,
      release: 0.7,
      ratio: 0.7,
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0.7,
      knee: 0.7,
      attack: 0.7,
      release: 0.7,
      ratio: 0.7,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 0.7,
      peak: 0.7,
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 0.7,
      peak: 0.7,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 0.7,
      peak: 0.7,
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 0.7,
      peak: 0.7,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0.7,
      distortion: 0.7,
      mix: 0.7,
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0.7,
      distortion: 0.7,
      mix: 0.7,
    }),
    isVisible: false,
  },
];
