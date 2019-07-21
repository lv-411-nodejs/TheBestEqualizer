import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TrackDuration from './trackDuration';

configure({ adapter: new Adapter() });


describe('TEST TRACK DURATION', () => {
  it('should format seconds in normal type', () => {
    const wrapper = shallow(<TrackDuration />);
    expect(wrapper.state('playing')).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('playing')).toBe(true);
  });
});
