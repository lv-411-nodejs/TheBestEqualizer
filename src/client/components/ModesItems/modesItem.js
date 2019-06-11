import React, { Component } from 'react';

class ModesItem extends Component {

    render() {
        const {iconUrl, text} = this.props;

      return (
        <div>
            <button>
               <img src={iconUrl} />
               {text}
            </button>
        </div>
      )
    }
  
}
  
export default ModesItem