import React from 'react';
import {
    shallow,
    render,
    mount
} from 'enzyme';
import { FilterToggler } from './filterToggler';
// import configureMockStore from "redux-mock-store";


describe('Filter Toggler', () => {
    const props = {
        audioData: {
            onToggle: false,
            sound: {},
            voice: {},
        },
        blocksData: [],
    };
    
    // const mockStore = configureMockStore();
    // let store;
    
    it('should render filterToggler element', () => {
        // store = mockStore({audioData: {
        //     onToggle: false,
        //     sound: {},
        //     voice: {},
        // },
        // blocksData: [],});
        const nextProps = {
            ...props,
        };
        
        const wrapper = shallow(<FilterToggler {...nextProps} />);
        // expect(wrapper.find('.modesElement')).toHaveLength(1);
    });

    it('should render filterToggler properly', () => {
        const nextProps = {
            ...props,
        };
        const wrapper = shallow(<FilterToggler {...nextProps} />);
        console.debug(wrapper);
        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke onToggler function that remove sound and attach voice filters', () => {
        const nextProps = {
            ...props,
        };
    });

});