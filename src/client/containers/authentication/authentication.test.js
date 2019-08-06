import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import {Authentication} from './authentication';
import { formValidation } from '../../helpers/formValidation';

jest.mock("../../helpers/constants", () => 'fieldsInfo');

jest.mock("../../helpers/formValidation");

const defaultProps = {
    onAuth: jest.fn(),
    history: {},
    loading: false,
    error: null,
};

describe('render Auth', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Authentication {...defaultProps}/>);
        return wrapper;
    })

    describe('render <Auth />', ()=>{
      test('Auth', () => {
        expect(wrapper.find('.authentication')).toHaveLength(1);
     });
    });
    
    describe('updation state with server validation errors', () => {
      test('Update state if there are server errors', () => {
        wrapper.setProps({error: {email: 'server error'}});
        expect(wrapper.state().validationErrors).toEqual({email: 'server error'})
      });
      test('Update state if there are not server errors', () => {
        wrapper.setProps({error: {}});
        expect(wrapper.state().validationErrors).toEqual({});
      });
    });

    describe('test onFormSubmit functionality', () => {
      const testingOnFormSubmit = (fakeErrors) => {
        formValidation.mockReturnValue(fakeErrors);
        wrapper.update();
        wrapper.instance().onFormSubmit();
      }
      test('it should setState when formValidation did not pass', () => {
        const fakeErrors= {email: 'fake email is not valid'};
        testingOnFormSubmit(fakeErrors);
        expect(wrapper.instance().state.validationErrors).toEqual(fakeErrors);
      });

      test('it should call action when formValidation was passed', () => {
        const fakeErrors= {};
        testingOnFormSubmit(fakeErrors);
        expect(wrapper.instance().props.onAuth).toBeCalled();
      })
    });

    describe('test onInputChange functionality', () => {
      test('it should setState when onInputChange is called', () => {
        const fakeInputData = {
          email: "fakeEmail"
        }
        wrapper.instance().onInputChange({ target: { name: "email", value: "fakeEmail" } });
        expect(wrapper.instance().state.validationErrors).toEqual({});
        expect(wrapper.instance().state.userData).toEqual(fakeInputData);
      });
    });

    describe('test if user already has an account', () => {
      test('the initial state of "isMember" should be "true"', () => {
        expect(wrapper.state().isMember).toBe(true);
      });
      test('onLinkClick should toggle the state of "isMember', () =>{
        const expectedState = !wrapper.state().isMember;
        wrapper.instance().onLinkClick();
        wrapper.update();
        expect(wrapper.state().isMember).toBe(expectedState);
      });
      test('should called "onLinkClick" function on "click" event', () => {
        const testClick = jest.spyOn(wrapper.instance(), 'onLinkClick');
        wrapper.instance().forceUpdate();
        wrapper.find('.message').simulate('click');
        expect(testClick).toHaveBeenCalled();
      });
    });

    describe('Fields info to render', () => {
      test('should render "Login" form first', () => {
        const fakeFieldsToRender = [{
          label: 'RegisterLabel',
          isMember: false,
      },
      {
          label: 'LoginLabel', 
          isMember: true
      }]
        expect(wrapper.instance().isMemberInfo(fakeFieldsToRender).fildsToRender.length).toBe(1);
      });
    });

    describe('test "formValidation" function', () => {
      test('doesnt throw en error when filds are valid', () => {
        const fakeData = {};
        console.log(formValidation(fakeData));
      })
    })
  });    