// import React from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from  'enzyme-adapter-react-16';
// import TrackDuration from './trackDuration';

// Enzyme.configure({
//   adapter: new Adapter(),
// });

// describe('TEST TRACK DURATION', () => {
//   const props = {
//     value: 0,
//     tooltip: false,
//     min: 0,
//     max: 1,
//     step: 0.001,
//   }

//   it('is render component', () => {
//     const nextProps = {
//       ...props,
//     };
//     const TrackDurationContainer = shallow(<TrackDuration {
//                                   ...nextProps, { context: {...} }
//                                 }
//     />);
//     expect(TrackDurationContainer.find('slider')).toHaveLength(1);
//   });

//   it('render component correctly', () => {
//     const nextProps = {
//       ...props,
//     };

//     const TrackDurationContainer = shallow(<TrackDuration {...nextProps}, { context: {...} }/>);
//     expect(TrackDurationContainer).toMatchSnapshot();
//   });

// });
