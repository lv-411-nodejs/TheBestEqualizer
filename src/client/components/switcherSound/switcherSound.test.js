import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import SwitcherSound from './switcherSound';


Enzyme.configure({
  adapter: new Adapter(),
});

describe('TEST SOUND SWITCHER', () => {
  const props = {
    value: 0,
    min: 0,
    max: 1,
    step: 0.001,
    onChange: () => {}
  }

  const store = createStore(() => ({}));

  it('is render component', () => {
    const nextProps = {
      ...props,
    };
    const switcherSoundComponent = shallow(<Provider store={store}><SwitcherSound {...nextProps} /></Provider>);
    console.log(switcherSoundComponent.debug())
    expect(switcherSoundComponent.find('slider')).toHaveLength(1);
  });

  it('render component correctly', () => {
    const nextProps = {
      ...props,
    };

    const switcherSoundComponent = shallow(<Provider store={store}><SwitcherSound {...nextProps} /></Provider>);
    console.log(switcherSoundComponent.debug())
    expect(switcherSoundComponent).toMatchSnapshot();
  });

});