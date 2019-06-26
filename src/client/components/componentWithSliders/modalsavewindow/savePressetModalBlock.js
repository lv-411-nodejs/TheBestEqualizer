import React, { Component } from 'react';
import ModalSaveWindow from './modalSaveWindow';
import BackgroundForModal from './backgroundForModal';

class SavePressetModalBlock extends Component {

    state = {
        showModalBlock: false
    }

    componentDidMount(){
      const buttonSave = document.getElementById("savePressetes");
            buttonSave.addEventListener("click", ()=>{
              this.showHideModalBlock();
      });
    }
    
    showHideModalBlock = () => {  
      this.setState({
        showModalBlock: !this.state.showModalBlock
      });
    }        

    render () {
      const modalBlock = this.state.showModalBlock ? (
        <React.Fragment>                     
          <ModalSaveWindow onclick={this.showHideModalBlock}/>
          <BackgroundForModal onclick={this.showHideModalBlock}/>          
        </React.Fragment>
      ) : null; 
     return(
        modalBlock
     );
    }
}

export default SavePressetModalBlock;

