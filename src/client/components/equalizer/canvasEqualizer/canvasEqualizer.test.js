import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import  CanvasEqualizer  from './canvasEqualizer';

Enzyme.configure({ adapter: new Adapter})

describe('Grafic equaliser', () => {

    const props = {
        width: 150,
        height: 100,
        getCanvasEl: ()=>{},
    }

    it('should RENDER PROPERLY', () => {
        const nextProps = {
            ...props,
        }

        const nextContainer = shallow(<CanvasEqualizer {...nextProps}/>);

    expect(nextContainer).toMatchSnapshot();    

    })
});


