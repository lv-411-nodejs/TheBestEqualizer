import React from 'react';
import { shallow } from 'enzyme';
import Equalizer from './Equalizer';

import { storeFactory, mockPizzicato } from '../../test/testUtils';

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => ({}));
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  mockPizzicato.Effects = jest.fn(()=>{})
  const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
                   'Reverb', 'Tremolo',  'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator' ];
  effects.forEach((effect,el)=>{
    mockPizzicato.Effects[effect] = jest.fn(() => {
      return function() {
        return {effect: () => (`fakeEffect${el}`)};
      };
    });
  })  
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

const setup = (initialState={}) => {
    const store = storeFactory(initialState);    
    const wrapper = shallow(<Equalizer store={store} />, { disableLifecycleMethods: true }).dive().dive();
    return wrapper;
}  

describe('test equalizer', () => {

  describe('test to make snapshot', ()=>{
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

  describe('test equlizer when sound is uploaded', ()=> {
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
  
  describe('test component methods', ()=>{
    const initialState={audioData: 
      { analyser:{getByteFrequencyData: jest.fn()}, audioContext:{} ,
      widthCanvas: 100,
      heightCanvas: 200, 
      cxt: {},    
      sound: {
        'pause':()=>{console.log('fakePauseMethod')},
        'play':()=>{console.log('fakePlayMethod')},
        'stop':()=>('fakePauseMethod')},
      voice: {
        'play':()=>('fakePlayMethod'),
        'stop':()=>('fakeStopMethod'),
        'pause':()=>('fakePauseMethod'),
        'connect':()=>('fakeConnectMethod'),
    },  
      startMuteState: false, 
      playPauseState: false,       
    },
    
    }  
    let wrapper;
    let instance
    beforeEach(()=>{
      jest.resetAllMocks();  
      wrapper = setup(initialState);
      instance = wrapper.instance();     
    })

    it('will test own method `setCanvasToState` which should set in state reference on canvas element', () => { 
      const paramForTest = document.createElement('canvas');
      const testedFunction= wrapper.instance().setCanvasToState;

      paramForTest.getContext = jest.fn(()=>'fakeCanvas');
      
      testedFunction(paramForTest);
      expect(wrapper.instance().state.ctx).toEqual('fakeCanvas')   
    });

    it('will test own method `playSoundFromFile` which should call action and function', async () => {
      wrapper.setProps({playPauseSoundFromFileAsProp: jest.fn(()=>('fakePlayPauseSoundFromFile'))});      
      instance.renderEqualizer = jest.fn();           
      instance.forceUpdate();

      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const testedFunction = instance.playSoundFromFile;
      const spyRendEqul =  jest.spyOn(instance, 'renderEqualizer');       
      
      testedFunction()       
      await expect(spyPlPasSound).toHaveBeenCalled()      
      await expect(spyRendEqul).toHaveBeenCalled()      
    });
    
    it('will test own method `attachFiltersToSource` which should attech five visible effects to input source', () => {     
      const fakeSourceInput = {
        howMuchEffectsAttached: 0,
        'addEffect': ()=>{fakeSourceInput.howMuchEffectsAttached++},
      };      
      const testedFunction = instance.attachFiltersToSource;            
      
      testedFunction(fakeSourceInput);       
      expect(fakeSourceInput.howMuchEffectsAttached).toEqual(5); 
    }); 

    it('will test own method `startMuteStream` which should call action and function', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        startMuteStreamAudioAsProp: jest.fn(()=>('fakeStartMuteStream'))
      });      
      instance.forceUpdate();      

      const testedFunction = instance.startMuteStream;
      const spyStMtStream = jest.spyOn(instance.props, 'startMuteStreamAudioAsProp');      
      const spyRendEqul =  jest.spyOn(instance, 'renderEqualizer');       
      
      testedFunction();       
      await expect(spyStMtStream).toHaveBeenCalled();      
      await expect(spyRendEqul).toHaveBeenCalled();      
    });    

    it('will test own method `startMuteStream` which should call action and function (if statement)', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        audioData: {...initialState.audioData, startMuteState: true},
        startMuteStreamAudioAsProp: jest.fn(()=>('fakeStartMuteStream'))
      });      
      instance.forceUpdate();      

      const testedFunction = instance.startMuteStream;
      const spyStMtStream = jest.spyOn(instance.props, 'startMuteStreamAudioAsProp');      
      const spyRendEqul =  jest.spyOn(instance, 'renderEqualizer');       
      
      testedFunction();       
      await expect(spyStMtStream).toHaveBeenCalled();      
      await expect(spyRendEqul).toHaveBeenCalled();      
    });

    it('will test own method `pauseSoundFromFile` which should call action and function', async () => {       
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({  
        playPauseSoundFromFileAsProp: jest.fn(()=>'fakePlayPauseSoundFromFile')
      });
      instance.forceUpdate();
      
      const testedFunction = instance.pauseSoundFromFile; 
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');     
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');     
      
      testedFunction()
      await expect(spyPlPasSound).toHaveBeenCalled()
      await expect(spyRendEqul).toHaveBeenCalled()
    });

    it('will test own method `pauseSoundFromFile` which should call action and function (tested if statement)', async () => {       
      wrapper.instance().renderEqualizer = jest.fn();
      wrapper.setProps({        
        audioData: {...initialState.audioData, playPauseState: true,},
        playPauseSoundFromFileAsProp: jest.fn(()=>'fakePlayPauseSoundFromFile')
      });
      instance.forceUpdate();

      
      const testedFunction = instance.pauseSoundFromFile; 
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');     
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');     
      
      testedFunction()
      await expect(spyPlPasSound).toHaveBeenCalled()
      await expect(spyRendEqul).toHaveBeenCalled()
    });

    it('will test own method `stopSoundFromFile` which should call functions and action', async () => {       
      wrapper.setState({ctx: {canvas: {width: 200, height:100},
        clearRect: ()=>{},
      }})
      wrapper.setProps({
        audioData: {...initialState.audioData, playPauseState: true,},
        playPauseSoundFromFileAsProp: jest.fn(()=>'fakePlayPauseSoundFromFile')
      })
      wrapper.instance().forceUpdate()
      
      const instance = wrapper.instance();
      const testedFunction = instance.stopSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const spySoundMethod = jest.spyOn(instance.props.audioData.sound, 'stop');
      const spyCanvasMethod = jest.spyOn(instance.state.ctx, 'clearRect');

      testedFunction()        
      await expect(spyPlPasSound).toHaveBeenCalled();
      expect(spySoundMethod).toHaveBeenCalled();
      expect(spyCanvasMethod).toHaveBeenCalled();
    });

    it('will test own method `stopSoundFromFile` which should call functions and not call action', async () => {       
      wrapper.setState({ctx: {canvas: {width: 200, height:100},
        clearRect: ()=>{},
      }})
      wrapper.setProps({playPauseSoundFromFileAsProp: jest.fn(()=>'fakePlayPauseSoundFromFile')});
      wrapper.instance().forceUpdate()
      
      const instance = wrapper.instance();      
      const testedFunction = instance.stopSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');      
      const spySoundMethod = jest.spyOn(instance.props.audioData.sound, 'stop');
      const spyCanvasMethod = jest.spyOn(instance.state.ctx, 'clearRect');
      
      testedFunction()        
      await expect(spyPlPasSound).not.toHaveBeenCalled();
      expect(spySoundMethod).toHaveBeenCalled();
      expect(spyCanvasMethod).toHaveBeenCalled();
    });

    it('will test own method `renderEqualizer` which should call function and itself by one tyme', () => {
      const spyRenderEqualizer = jest.spyOn(instance, 'renderEqualizer');        
      const testedFunction = instance.renderEqualizer;      
      const spyRoundedRectdMethod = jest.spyOn(instance, 'roundedRect');
      const canvasMethods = ['clearRect', 'beginPath', 'moveTo', 'lineTo', 'arcTo', 'lineTo', 'fill'] ;
      const mockCanvasMethod = {};

      canvasMethods.forEach((method) => {
        mockCanvasMethod[method]= jest.fn()});         
      wrapper.setState({ctx: {canvas: {width: 200, height:100},
        ...mockCanvasMethod,
      }})      
      instance.forceUpdate();    
      
      testedFunction()        
      expect(spyRoundedRectdMethod).toHaveBeenCalled();
      expect(spyRenderEqualizer).toHaveBeenCalledTimes(1);      
    });





  });


});
