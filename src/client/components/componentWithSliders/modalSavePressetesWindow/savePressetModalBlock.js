import React, { Component } from 'react';
import ModalSaveWindow from './modalSavePressetesWindow';
import BackgroundUnderModelWindow from './backgroundUnderModelWindow';

class SavePressetModalBlock extends Component {

    state = {
        isModalBlockShow: false
    }

    componentDidMount(){
      const buttonSave = document.getElementById("savePressetes");
            buttonSave.addEventListener("click", ()=>{
              this.showHideModalBlock();
      });
    }
    
    showHideModalBlock = () => {  
      this.setState({
        isModalBlockShow: !this.state.isModalBlockShow
      });
    }        

    gatherPressetesValuesAndSendToBD = () => {
      //logic
    }

    render () {
      const { isModalBlockShow } = this.state;
      const modalBlock = isModalBlockShow ? (
        <React.Fragment>                     
          <ModalSaveWindow 
            cancelButtonclick={this.showHideModalBlock} 
            saveButtonClick={this.gatherPressetesValuesAndSendToBD}
          />
          <BackgroundUnderModelWindow backgroundClick={this.showHideModalBlock}/>          
        </React.Fragment>
      ) : null; 
     return(
        modalBlock
     );
    }
}

export default SavePressetModalBlock;

