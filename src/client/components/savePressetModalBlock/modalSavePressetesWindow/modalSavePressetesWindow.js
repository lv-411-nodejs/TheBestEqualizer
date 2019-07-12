import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../button';
import './modalSavePressetesWindow.css';
import { cancelIcon, saveIcon } from '../../../assets/icons/icons';


class SavePressetesModalWindow extends Component {
  state = {
    valueFromPresetInput: '',
  }

  handleInputChange = (event) => {
    event.stopPropagation();
    this.setState({ valueFromPresetInput: event.target.value });
  }

  handleFilterDataSend = (valueFromPresetInput, currentValueOfFilters) => {
    axios.post('/presets', {
      presetName: valueFromPresetInput,
      currentValueOfFilters,
    });
  }

  render() {
    const {
      showHideModalBlock,
      refFocus,
      currentValueOfFilters,
    } = this.props;

    const { valueFromPresetInput } = this.state;
    return (
      <div
        role="button"
        className="modalSavePressetesWindow"
        id="modalSavePressetesWindow"
        tabIndex="0"
        onKeyDown={showHideModalBlock}
        ref={refFocus}
      >
        <div className="headerModalWindow">
          {cancelIcon}
        </div>
        <div className="textArea">
          <h3>Please type presset&#39;s name</h3>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={valueFromPresetInput}
          />
        </div>
        <div className="SaveCancelButtonsContainer">
          <Button
            className="ButtonStyleTemplate"
            onClick={() => this.handleFilterDataSend(valueFromPresetInput, currentValueOfFilters)}
            icon={saveIcon}
            value="Save"
          />
          <Button
            className="ButtonStyleTemplate"
            onClick={showHideModalBlock}
            icon={cancelIcon}
            value="Cancel"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentValueOfFilters: state.blocksData,
});

SavePressetesModalWindow.propTypes = {
  showHideModalBlock: PropTypes.func.isRequired,
  refFocus: PropTypes.func.isRequired,
  currentValueOfFilters: PropTypes.instanceOf(Array),
};

export default connect(mapStateToProps)(SavePressetesModalWindow);
