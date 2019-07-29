import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import { VolumeComponent } from './volumeComponent';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('TEST VOLUME SLIDER', () => {
  const props = {
    min: 0,
    max: 1,
    step: 0.001,
    audioData: {sound: {}, voice: {}},
  }

  it('is render component', () => {
    const nextProps = {
      ...props,
      value: 0,
      onChange: () => {},
    };
    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper.find(".SwitcherContainer")).toHaveLength(1);
  });

  it('render component correctly', () => {
    const nextProps = {
      ...props,
      value: 0,
      onChange: () => {},
    };

    const VolumeComponentWrapper = shallow(<VolumeComponent {...nextProps} />);
    expect(VolumeComponentWrapper).toMatchSnapshot();
  })

});