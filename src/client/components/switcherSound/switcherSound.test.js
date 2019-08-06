import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SwitcherSound } from './switcherSound';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('TEST SOUND SWITCHER', () => {
  const props = {
    min: 0,
    max: 1,
    step: 0.001,
    onChange: () => {},
    audioData: { sound: {}, voice: {} },
  };
  it('is render component', () => {
    const switcherSoundComponent = shallow(<SwitcherSound {...props} />);
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    expect(switcherSoundComponent).toHaveLength(1);
  });

  it('render component correctly', () => {
    const switcherSoundComponent = shallow(<SwitcherSound {...props} />);
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    switcherSoundComponent.find('Slider');
    expect(switcherSoundComponent).toMatchSnapshot();
  });

  it('should call function after change', () => {
    const switcherSoundComponent = shallow(<SwitcherSound {...props} />);
    switcherSoundComponent.setState({ volumeValueTrack: 0.8 });
    const instance = switcherSoundComponent.instance();

    const spySwitching = jest.spyOn(instance, 'changeVolume');
    switcherSoundComponent.instance().forceUpdate();
    switcherSoundComponent.find('Slider').simulate('change', 1);
    expect(spySwitching).toHaveBeenCalled();
  });

  it('should we return null in getDerivedStateFromProps', () => {
    const nextProps = {
      ...props,
      audioData: { sound: null, voice: {} },
    };
    const switcherSoundComponent = shallow(<SwitcherSound {...nextProps} />);
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    expect(switcherSoundComponent).toHaveLength(1);
  });
});
