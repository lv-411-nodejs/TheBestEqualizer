import React, { Component, Fragment } from 'react';
import ModalSavePressetesWindow from './modalSavePressetesWindow';
import BackgroundUnderModelWindow from './backgroundUnderModelWindow';

class SavePressetModalBlock extends Component {
    state = {
      isModalBlockShow: false,
    }

    componentDidMount() {
      const buttonSave = document.getElementById('savePressetes');
      buttonSave.addEventListener('click', (clickEvent) => {
        this.showHideModalBlock(clickEvent);
        document.getElementById('modalSavePressetesWindow').focus();
      });
    }

    showHideModalBlock = (clickOrEscKeyEvent) => {
      const { isModalBlockShow } = this.state;
      if (((clickOrEscKeyEvent.type === 'keydown') && (clickOrEscKeyEvent.key === 'Escape'))
          || (clickOrEscKeyEvent.type === 'click')) {
        this.setState({
          isModalBlockShow: !isModalBlockShow,
        });
      }
    }

    gatherPressetesValuesAndSendToBD = () => {
      // logic
    }

    render() {
      const { isModalBlockShow } = this.state;
      const modalBlock = isModalBlockShow ? (
        <Fragment>
          <ModalSavePressetesWindow
            cancelButtonClickOrKeyEscDown={this.showHideModalBlock}
            saveButtonClick={this.gatherPressetesValuesAndSendToBD}
          />
          <BackgroundUnderModelWindow backgroundClick={this.showHideModalBlock} />
        </Fragment>
      ) : null;
      return modalBlock;
    }
}

export default SavePressetModalBlock;
