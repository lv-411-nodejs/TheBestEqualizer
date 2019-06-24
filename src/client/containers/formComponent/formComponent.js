import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';  
import FormField from '../../components/formField/formField';
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
    }

    onInputChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    }

    onRegistratuinSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        this.props.postUserData(newUser);
        // this.props.history.push('/main');
    }

    onLoginSubmit = (e) => {
        e.preventDefault();
        this.props.getUserData(); 
        this.props.history.push('/main'); 
    }


    render() {
        const {fildsToRender, isMember} = this.props;
        const onSubmit = isMember ? this.onLoginSubmit : this.onRegistratuinSubmit;
        const formFilds = fildsToRender.map((el,i)=>(
                <FormField 
                key={i+3}
                onInputChange={this.onInputChange}
                el={el}/>
            ));
    return (
        <div>
            <form onSubmit={onSubmit} className='form-body' autoComplete='off'>
                {formFilds}
                <div className="field">
                    <button className="submit">Submit</button>
                </div>
            </form>
        </div>
    );
    }
}

FormComponent.propTypes = {
    getUserData: PropTypes.func.isRequired,
    postUserData: PropTypes.func.isRequired,
    postuser: PropTypes.object.isRequired,
    getuser: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    fildsToRender: PropTypes.array.isRequired,
    isMember: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    postuser: state.postUser.postuser,
    getuser: state.getUser.getuser
});

export default connect(mapStateToProps, {postUserData, getUserData})(withRouter(FormComponent));
