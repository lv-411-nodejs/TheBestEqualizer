import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
                <Link to="/auth">Login</Link>
                <Link to="/regist">Registration</Link>
            </div>
        );
    }
}

export default Main;