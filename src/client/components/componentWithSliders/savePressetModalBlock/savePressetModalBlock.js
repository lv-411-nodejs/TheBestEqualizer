import React, { Component, Fragment } from 'react';
import ModalSavePressetesWindow from './modalSavePressetesWindow';
import BackgroundUnderModelWindow from './backgroundUnderModelWindow';

class SavePressetModalBlock extends Component {  
    autoFocusModalSavePressetesWindow = (elementFromRef) => {      
      elementFromRef && elementFromRef.focus();
    }   

    gatherPressetesValuesAndSendToBD = () => {
      // logic for gather data from pressetes and sent to DB
    }

    render() {      
      return (
        <Fragment>          
          <ModalSavePressetesWindow
            showHideModalBlock={this.props.showHideModalBlock}
            saveButtonClick={this.gatherPressetesValuesAndSendToBD}
            refFocus={this.autoFocusModalSavePressetesWindow } 
          />
          <BackgroundUnderModelWindow backgroundClick={this.props.showHideModalBlock} />
        </Fragment>
      );
    }
}

export default SavePressetModalBlock;
