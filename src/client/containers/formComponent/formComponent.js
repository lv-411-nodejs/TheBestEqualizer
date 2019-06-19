import React, { Component } from 'react';
import FormFild from '../../components/formFild/formFild';
import {connect} from 'react-redux';
import {postUserData} from '../../actions/postUserDataAction';
import {getUserData} from '../../actions/getUserDataAction';
import PropTypes from 'prop-types';
import './formComponent.css';

class FormComponent extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        gotothemain: false
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onRegistratuinSubmit = (e) => {
        e.preventDefault();
        if(this.props.user.password!==this.props.user.passwordConfirmation){
            return 'Please check password confirmation';
        }
        console.log('Registration');
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.postUserData(newUser);
    }

    onLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login');
        this.props.getUserData();
    }


    render() {
        const {fildsToRender, isMember} = this.props;
        const onSubmit = isMember?this.onLoginSubmit:this.onRegistratuinSubmit;
        const formFilds = fildsToRender.map((el,i)=>{
            return (
                <FormFild 
                key={i+3}
                onInputChange={this.onInputChange}
                el={el}/>
            )
        })
    return (
        <div>
            <form onSubmit={onSubmit} className='form-body'>
                {formFilds}
                <div className="field">
                    <button className="submit">Submit</button>
                </div>
            </form>
        </div>
    )
    }
}

FormComponent.propTypes = {
    getUserData: PropTypes.func.isRequired,
    postUserData: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    user: state.postUser.user,
    users: state.getUser.users
})

export default connect(mapStateToProps, {postUserData, getUserData})(FormComponent);