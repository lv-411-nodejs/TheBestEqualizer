import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import { SwitcherSound } from './switcherSound';


Enzyme.configure({
  adapter: new Adapter(),
});

describe('TEST SOUND SWITCHER', () => {
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
    const switcherSoundComponent = shallow(<SwitcherSound {...nextProps} />);
    expect(switcherSoundComponent.find(".SwitcherContainer")).toHaveLength(1);
  });

  it('render component correctly', () => {
    const nextProps = {
      ...props,
      value: 0,
      onChange: () => {},
    };

    const switcherSoundComponent = shallow(<SwitcherSound {...nextProps} />);
    expect(switcherSoundComponent).toMatchSnapshot();
  });

  it("check the onChange callback", () => {
      const nextProps = {
          ...props,
          value: 0.5,
        },
        switcherSoundComponent = mount(<SwitcherSound {...nextProps} />).find("Slider");
      switcherSoundComponent.simulate("change",  {target: {value: 0.7}});
    
    console.log(switcherSoundComponent.debug())
    expect(switcherSoundComponent.value).toEqual(0.7);
  });

});