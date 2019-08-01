import { createStore } from 'redux';


import rootReducer from '../store/reducers'

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

export const mockPizzicato = () => {   
   return jest.mock('pizzicato', () => {
        const mockPizzicato = jest.fn();
        mockPizzicato.context = jest.fn(() => ({}));
        mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
        mockPizzicato.Effects = jest.fn(()=>{})
        const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
                         'Reverb', 'Tremolo',  'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator' ];
        effects.map((effect)=>{
          mockPizzicato.Effects[effect] = jest.fn(() => {
            return function() {
              return {effect: () => {}};
            };
          });
        })
        
        return {
          __esModule: true,
          default: mockPizzicato,
        };
      });
      
}