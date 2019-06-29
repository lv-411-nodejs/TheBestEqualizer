import React, { Component } from 'react';

class SavePressetesToDBButton extends Component {
    render() {
    const {className, 
           id, 
           onClickHandler,
           buttonTitle,
            } = this.props;
    return (    
        <button 
            className={className} 
            id={id} 
            onClick={onClickHandler}>
                {buttonTitle}
        </button>
    )
    }
}

export default SavePressetesToDBButton;