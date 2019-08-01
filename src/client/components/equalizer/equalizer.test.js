import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Equalizer from './Equalizer';

import { storeFactory, mockPizzicato } from '../../test/testUtils';
// mockPizzicato();

jest.mock('pizzicato', () => {
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

// const initialStore = {
//   audioData: { analyser:{}, audioContext:{} },
//   blocksData: [],
//   presetsData: ()=>{},    
// }; 

const setup = (initialState={}) => {
    const store = storeFactory(initialState);    
    const wrapper = shallow(<Equalizer  store={store} />, { disableLifecycleMethods: true }).dive().dive();    
    // const instance = wrapper.instance();
    // instance.prototype.getDerivedStateFromProps = jest.fn(); 
    // console.log(wrapper.debug(), '-----', wrapper.instance())  
    return wrapper;
}  

describe('Test equalizer', () => {

  describe('should make snapsjot', ()=>{
  it('should render component properly', () => {   
    const initialState={audioData: 
      { analyser:{}, audioContext:{} ,
      widthCanvas: 100,
      heightCanvas: 200,}
    }  
      let wrapper;
      wrapper = setup(initialState)   
    expect(wrapper).toMatchSnapshot();
  });
})

  describe('Test equlizer when sound is uploaded', ()=> {
    const initialState={audioData: 
      { analyser:{}, audioContext:{} ,
      widthCanvas: 100,
      heightCanvas: 200,      
      sound: true,
    }
    }  
    let wrapper;
    beforeEach(()=>{  
      wrapper = setup(initialState) 
      // wrapper.instance().playSoundFromFile = () => Promise.resolve();   
    })
    it('should render `play` button', () => { 
        expect(wrapper.find('Button[value="Play"]').length).toBe(1)
      
    });
    it('should render `pause` button', () => { 
      expect(wrapper.find('Button[value="Pause"]').length).toBe(1)
    
  });
    it('should call function after click on `play` button', () => { 
      const instance = wrapper.instance();

      const spyPlay = jest.spyOn(instance, 'playSoundFromFile');
      wrapper.instance().forceUpdate()
      wrapper.find('Button[value="Play"]').simulate('click');         
      expect(spyPlay).toHaveBeenCalled();     
});
    it('should call function after click on `pause` button', () => { 
      const instance = wrapper.instance();
      
      const spyPause = jest.spyOn(instance, 'pauseSoundFromFile');
      wrapper.instance().forceUpdate()
      wrapper.find('Button[value="Pause"]').simulate('click');         
      expect(spyPause).toHaveBeenCalled();     
    });
    it('should call function after click on `startStreamButton` button', () => { 
      const instance = wrapper.instance();
      
      const spyPause = jest.spyOn(instance, 'startMuteStream');
      wrapper.instance().forceUpdate()
      wrapper.find('Button[value="Start stream"]').simulate('click');         
      expect(spyPause).toHaveBeenCalled();     
    });
  })  
  
  desc


});
