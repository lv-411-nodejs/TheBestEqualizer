import React from 'react';
import { shallow } from 'enzyme';
import { VolumeComponent } from './volumeComponent';

describe('TEST VOLUME SLIDER', () => {
  const props = {
    min: 0,
    max: 1,
    step: 0.001,
    onChange: () => {},
    audioData: { sound: {}, voice: {} },
  };

  it('is render component', () => {
    const nextProps = {
      ...props,
      value: 0,
    };
    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper.find('.SwitcherContainer')).toHaveLength(1);
  });

  it('render component correctly', () => {
    const nextProps = {
      ...props,
      value: 0,
    };

    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper).toMatchSnapshot();
  });

  it('should call function after change', () => {
    const VolumeComponentWrapper = shallow(<VolumeComponent {...props} />);
    VolumeComponentWrapper.setState({ volumeValueSound: 0.8 });
    const instance = VolumeComponentWrapper.instance();

    const spySwitching = jest.spyOn(instance, 'changeVolume');
    VolumeComponentWrapper.instance().forceUpdate();
    VolumeComponentWrapper.find('Slider').simulate('change', 1);
    expect(spySwitching).toHaveBeenCalled();
  });

  it('should we return sound as track in getDerivedStateFromProps', () => {
    const nextProps = {
      ...props,
      audioData: { sound: { playing: true }, voice: null },
    };
    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper).toHaveLength(1);
  });

  it('should we return sound as voice in getDerivedStateFromProps', () => {
    const nextProps = {
      ...props,
      audioData: { sound: null, voice: { playing: true } },
    };
    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper).toHaveLength(1);
  });
});
