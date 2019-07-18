import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../button';
import './modalSavePressetesWindow.css';
import { cancelIcon, saveIcon } from '../../../assets/icons/icons';
import fetchRequest from '../../../helpers/fetchRequest';


class SavePressetesModalWindow extends Component {
  state = {
    valueFromPresetInput: '',
    savePresetStatusMessage: '',
  }

  handleInputChange = (event) => {
    event.stopPropagation();
    this.setState({ valueFromPresetInput: event.target.value });
  }

  handleFilterDataSend = (valueFromPresetInput, currentValueOfFilters) => {
    fetchRequest.post('http://localhost:8080/effects', {
      title: valueFromPresetInput,
      presets: currentValueOfFilters,
    })
      .then(response => this.setState({ savePresetStatusMessage: response.data.result }));
  };

  render() {
    const {
      showHideModalBlock,
      refFocus,
      currentValueOfFilters,
    } = this.props;

    const { valueFromPresetInput, savePresetStatusMessage } = this.state;
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
          <span className="savePresetStatusMessage">{savePresetStatusMessage}</span>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={valueFromPresetInput}
          />
          <span className="spanTooltipMessage">write preset-name without space</span>
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
