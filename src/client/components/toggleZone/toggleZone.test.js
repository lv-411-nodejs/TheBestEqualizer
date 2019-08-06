import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import ToggleZone from './toggleZone';

Enzyme.configure({ adapter: new Adapter() });

describe('Toggle Zone Component', () => {

    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    const fakeChilds = {
        children: React.createElement('div')
    };

    beforeEach(() => {
        wrapper = shallow(<ToggleZone {...fakeChilds} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render ToggleZone component properly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should handle onClick action on ToggleZone button', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual('Hide Effects');
    });
});