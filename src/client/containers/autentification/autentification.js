import React, { Component } from 'react';
import FormComponent from '../formComponent/formComponent';
import { filds } from '../formComponent/fildsInfo';
import './autentification.css';

class Autentification extends Component {
    state = {
        isMember: true
    }
    
    onLinkClick = () => {
        this.setState(()=>{
            return {
                isMember: !this.state.isMember
            }
        })
    }

    filterFilds = (arr, status) => {
        if(status){
          return arr.filter((el)=>status === el.isMember);
        }else{
          return arr
        }
    }
    
    render() {
        const {isMember} = this.state;
        const fildsToRender = this.filterFilds(filds, isMember);
        const formTitle = isMember?'Login':'Registration';
        const message = isMember?'Dont have an account? Registration.':'Already a user? Login.';
        return (
            <div>
                <div className='autentification-page'>
                    <div className='form-container'>
                        <div className='form-area'>
                            <h1 className='title'>{formTitle}</h1>
                            <FormComponent
                                isMember={isMember}   
                                fildsToRender={fildsToRender}/>
                            <div>
                            <button onClick={this.onLinkClick} className="message">{message}</button>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        )
    }
}

export default Autentification;