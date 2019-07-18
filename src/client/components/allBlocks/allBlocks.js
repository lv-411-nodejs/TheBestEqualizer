import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setVisibility,
} from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import { checkTickIcon } from '../../assets/icons/icons';
import './alllBlocks.css';

class AllBlocks extends Component {
  toggleSourceFilters = (filterName) => {
    const { setVisibility, blocksData } = this.props;
    setVisibility(filterName);
    blocksData.forEach(({ createEffect, isVisible, name }) => {
      if(filterName === name) {
        if(this.props.audioData.onToggle) {
          isVisible ? this.props.audioData.voice.removeEffect(createEffect)
          : this.props.audioData.voice.addEffect(createEffect);
        } else {
          isVisible ? this.props.audioData.sound.removeEffect(createEffect)
          : this.props.audioData.sound.addEffect(createEffect);
        }
      }
    });
  }
  render() {
    const { blocksData } = this.props;
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
                  onClick={() => this.toggleSourceFilters(name)}
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
                />
              )
              : null))}
          </div>
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
  audioData: state.audioData,
  sound: state.audioData.sound,
  voice: state.audioData.voice,
});

export default connect(mapStateToProps, { setVisibility })(AllBlocks);
