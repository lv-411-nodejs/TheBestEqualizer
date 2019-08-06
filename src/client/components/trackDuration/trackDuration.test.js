import React from 'react';
import { shallow } from 'enzyme';
import { TrackDuration } from './trackDuration';

describe('TEST DURATION SLIDER', () => {
  const props = {
    tooltip: false,
    min: 0,
    max: 1,
    step: 0.001,
    audioData: {
      sound: {
        pause: () => (
          'fakePauseMethod'
        ),
        play: () => (
          'fakePlayMethod'
        ),
        stop: () => 'fakePauseMethod',
      },
      voice: {
        pause: () => (
          'fakePauseMethod'
        ),
        play: () => (
          'fakePlayMethod'
        ),
        stop: () => 'fakePauseMethod',
      },
    },
    onChangeStart: () => {},
    onChange: () => {},
    onChangeComplete: () => {},
  };

  it('is render component', () => {
    const nextProps = {
      ...props,
      value: 0,
    };
    const TrackDurationWrapper = shallow(<TrackDuration {...nextProps} />);

    expect(TrackDurationWrapper.find('.DurationContainer')).toHaveLength(1);
  });

  it('render component correctly', () => {
    const TrackDurationWrapper = shallow(<TrackDuration {...props} />);

    expect(TrackDurationWrapper).toMatchSnapshot();
  });

  it('should call function after change', () => {
    const TrackDurationWrapper = shallow(<TrackDuration {...props} />);
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setCurrentTime');

    TrackDurationWrapper.setState({ currentTime: 200 });
    TrackDurationWrapper.find('Slider').simulate('change', 300);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song play again if onToggle will false', () => {
    const TrackDurationWrapper = shallow(<TrackDuration {...props} />);
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setPlayOnSound');

    TrackDurationWrapper.setState({ onToggle: false, currentTime: 200, duration: 300 });
    TrackDurationWrapper.find('Slider').simulate('changeComplete', 300);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song pause if onToggle will true', () => {
    const TrackDurationWrapper = shallow(<TrackDuration {...props} />);
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setPauseOnSound');

    TrackDurationWrapper.setState({ onToggle: true, currentTime: 200, duration: 300 });
    TrackDurationWrapper.find('Slider').simulate('changeStart', 250);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song stop if current time will more then duration', () => {
    const nextProps = {
      ...props,
      currentDifference: 100,
      currentTime: 200,
    };

    const TrackDurationWrapper = shallow(<TrackDuration {...nextProps} />);
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'calculateCurrentTime');

    TrackDurationWrapper.setState({ duration: 100, playing: true });
    TrackDurationWrapper.find('Slider').simulate('change', 1);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should duration from audio Data will assign in state', () => {
    const nextProps = {
      audioData: {
        sound: {
          sourceNode: {
            buffer: {
              duration: 200,
            },
          },
        },
        voice: {},
      },
    };

    const TrackDurationWrapper = shallow(<TrackDuration {...nextProps} />);

    TrackDurationWrapper.setState({ startPlayTime: new Date(), loading: false });

    expect(TrackDurationWrapper.state().duration).toEqual(200);
  });

  it('should time start from zero if we load another song', () => {
    const TrackDurationWrapper = shallow(<TrackDuration {...props} />);
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'calculateCurrentTime');

    TrackDurationWrapper.setState({ currentTime: 200, duration: 100, playing: true });
    TrackDurationWrapper.setProps({ currentDifference: 100 });
    TrackDurationWrapper.find('Slider').simulate('change', 1);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should startPlayTime setting again if song will changed', () => {
    const nextProps = {
      ...props,
    };
    const TrackDurationWrapper = shallow(<TrackDuration {...nextProps} />);

    TrackDurationWrapper.setState({ trackName: 'Song1', currentTime: 0, duration: 200 });
    TrackDurationWrapper.setState({
      trackName: 'Song2', currentTime: 0, duration: 200, timeForTest: new Date(),
    });

    expect(TrackDurationWrapper.state().startPlayTime).toBeTruthy();
  });
});
