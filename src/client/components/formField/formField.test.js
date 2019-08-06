import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import FormField from './formField';

const defaultProps = {
    onInputChange: jest.fn(),
    value: '',
    error: '',
    field: {
        name: '',
        label: '',
        type: '',
    },
}

const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}

describe('testing render', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<FormField {...defaultProps}/>);
        return wrapper;
    });
    test('render "FormField" component', () => {
        expect(wrapper.find('.formField')).toHaveLength(1);
    });
    test('render label of "FormField" component', () => {
        expect(wrapper.find('.label')).toHaveLength(1);
    });
    test('render field of "FormField" component', () => {
        expect(wrapper.find('.field').children()).toHaveLength(1);
    });
    test('render error block "FormField" component', () => {
        expect(wrapper.find('.error')).toHaveLength(1);
    });
    // test('should render formField properly', () => {
    //     expect(wrapper).toMatchSnapshot();
    // });
    test('should call "onInputChange" function', () => {
        wrapper.find('input').simulate('change');
        console.log(wrapper.props());
        expect(defaultProps.onInputChange).toHaveBeenCalled();
    })
});

describe('testing ptopTypes', () => {
    test('does not throw warning with expected props', () => {
        checkProps(FormField, defaultProps);
    })
});
