import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from './formComponent';

const defaultProps = {
    fieldsToRender: [],
    userData: {},
    onFormSubmit: jest.fn(),
    onInputChange: jest.fn(),
    loading: false,
};

const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<FormComponent {...setupProps}/>);
}

describe('testing render', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        return wrapper;
    });
    test('render FormComponent', () => {
        expect(wrapper.find('.form-body')).toHaveLength(1);
    });
    test('render form body fields', () => {
        expect(wrapper.find('RenderFormFields')).toHaveLength(1);
    });
    test('render button "Submit"', () => {
        expect(wrapper.find('.field').children()).toHaveLength(1);
    });
    test('test calling "onFormSubmit" function on click event', () => {
        wrapper.find('Button').simulate('click');
        expect(defaultProps.onFormSubmit).toHaveBeenCalled();
    });
    test('test button value when {loading: false}', () => {
        expect(wrapper.find('Button').prop('value')).toBe('Submit');
        expect(wrapper.find('Button').prop('disabled')).toBe(null);
    });
    test('test button value when {loading: true}', () => {
        const initialState = {loading: true};
        const wrapper = setup(initialState);
        expect(wrapper.find('Button').prop('value').type).toBe('img');
        expect(wrapper.find('Button').prop('disabled')).toBe('disabled');
    });
});

describe('testing ptopTypes', () => {
    test('does not throw warning with expected props', () => {
        checkProps(FormComponent, defaultProps);
    })
});
