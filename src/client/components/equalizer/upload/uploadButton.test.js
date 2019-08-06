import React from 'react';
import { shallow } from 'enzyme';

import UploadButton from './uploadButton';

describe('test infoAboutUploadFile component', () => {
  const props = {
    handleInfoFromSound: jest.fn(),
  };

  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<UploadButton {...props}/>);  
  })

  it('should render element with `trackname`', () => {
    
    expect(wrapper.find('div').text()).toEqual('<FontAwesomeIcon />Track name: fakeName');
  });

  it('should render component properly', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
});
