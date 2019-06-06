import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Main</h1>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
            </React.Fragment>
        );
    }
}

export default Main;