import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pizzicato from 'pizzicato';
import { connect } from 'react-redux';
import {
  setVisibility,
} from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import Button from '../button';
import {
  pauseIcon, playIcon, stopIcon, checkTickIcon,
} from '../../assets/icons/icons';
import Sound from '../../sounds/sound.mp3';
import './alllBlocks.css';

class AllBlocks extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sound: new Pizzicato.Sound(Sound, this.runSound),
      isPlaying: false,
    };
  }

  runSound = () => {
    const { blocksData } = this.props;
    return blocksData.forEach(({ createEffect }) => {
      const { sound } = this.state;
      sound.addEffect(createEffect);
    });
  }
  ;

  play = () => {
    this.setState({ isPlaying: true });
    const { sound } = this.state;
    sound.play();
  };

  pause = () => {
    this.setState({ isPlaying: false });
    const { sound } = this.state;
    sound.pause();
  };

  stop = () => {
    this.setState({ isPlaying: false });
    const { sound } = this.state;
    sound.stop();
  };

  render() {
    const { sound, isPlaying } = this.state;
    const { setVisibility, blocksData } = this.props;

    console.log(blocksData)
    const PlayButton = (
      <Button
        className="PlayButton"
        onClick={this.play}
        icon={playIcon}
        value="Play"
      />
    );

    const PauseButton = (
      <Button
        className="PauseButton"
        onClick={this.pause}
        icon={pauseIcon}
        value="Pause"
      />
    );

    const StopButton = (
      <Button
        className="StopButton"
        onClick={this.stop}
        icon={stopIcon}
        value="Stop"
      />
    );

    return (
      <div className="SlidersComponent__main--container">
        <div className="AllSliders">
          <div className="ListOfEffects">
            {
              blocksData.map(({ name, isVisible }) => (
                <button
                  className="Effect"
                  key={name}
                  type="button"
                  id={name}
                  name={name}
                  onClick={() => setVisibility(name)}
                >
                  {name}
                  {' '}
                  {isVisible ? checkTickIcon : ''}
                </button>
              ))
            }
          </div>
          <div className="Sliders">
            {blocksData.map(({
              name, effects, isVisible,
            }) => (isVisible
              ? (
                <BlockOfSliders
                  name={name}
                  effects={effects}
                  key={name}
                  sound={sound}
                />
              )
              : null))}
          </div>
        </div>
        <div className="Buttons">
          {isPlaying ? PauseButton : PlayButton}
          {StopButton}
        </div>
      </div>
    );
  }
}

AllBlocks.propTypes = {
  blocksData: PropTypes.instanceOf(Array),
  setVisibility: PropTypes.func,
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
});

export default connect(mapStateToProps, {
  setVisibility,
})(AllBlocks);
