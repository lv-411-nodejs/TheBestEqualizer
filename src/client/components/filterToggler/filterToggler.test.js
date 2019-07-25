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
            sound: {
                effects: [],
                attachFiltersToSource: jest.fn(),
                removeSourceFilters: jest.fn(),
            },
            voice: {
                effects: [],
                attachFiltersToSource: jest.fn(),
                removeSourceFilters: jest.fn(),
            },
        },
        blocksData: [
            {
                name: 'Delay',
                isVisible: true,
            },
            {
                name: 'Ping-Pong Delay',
                isVisible: false,
            },
            {
                name: 'Dub Delay',
                isVisible: false,
            },
            {
                name: 'Distortion',
                isVisible: true,
            },
            {
                name: 'Quadrafuzz',
                isVisible: false,
            },
            {
                name: 'Flanger',
                isVisible: true,
            },
            {
                name: 'Reverb',
                isVisible: true,
            },
            {
                name: 'Tremolo',
                isVisible: true,
            },
            {
                name: 'Stereo panner',
                isVisible: false,
            },
            {
                name: 'Compressor',
                isVisible: false,
            },
            {
                name: 'Low-Pass Filter',
                isVisible: false,
            },
            {
                name: 'High-Pass Filter',
                isVisible: false,
            },
            {
                name: 'Ring Modulator',
                isVisible: false,
            },
        ],
    };
    
    it('should render filterToggler element', () => {
        const nextProps = {
            ...props,
        };
        
        const wrapper = shallow(<FilterToggler {...nextProps} />);
        expect(wrapper.find('.modesElement')).toHaveLength(1);
    });

    it('should render filterToggler properly', () => {
        const nextProps = {
            ...props,
        };
        const wrapper = shallow(<FilterToggler {...nextProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    // it('should change onToggler from props to true', () => {
    //     const nextProps = {
    //         ...props,
    //     };

    //     const mockAttachFiltersToSource = jest.fn();
    //     // const mockRemoveSourceFilters = jest.fn();

    //     const wrapper = shallow(<FilterToggler {...nextProps} attachFiltersToSource={mockAttachFiltersToSource} />);
    //     wrapper.props().attachFiltersToSource(nextProps.audioData.sound)
    //     expect(nextProps.audioData.sound.effects).toHaveLength(5);
    // });

    it('should invoke onToggler function that remove sound and attach voice filters', () => {
        const nextProps = {
            ...props,
        };
        const wrapper = shallow(<FilterToggler {...nextProps} />);
        wrapper.find('#toggler').simulate('click');
        expect(nextProps.audioData.voice.effects).toHaveLength(5);
    });
});