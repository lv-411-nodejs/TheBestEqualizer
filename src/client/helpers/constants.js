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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
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
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: 0,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 0,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 1,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 22050,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 22050,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];

export const ROCK_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
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
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: 0,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 0,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 1,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 22050,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 22050,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];

export const POP_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
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
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
      time: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
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
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
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
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: 0,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 0,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 1,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 22050,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 22050,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];
