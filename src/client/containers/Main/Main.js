import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AdditionalConfigs from '../../components/additionalConfigs/additionalConfigs';

class Main extends Component {
  render () {
    return (
      <React.Fragment>
        <AdditionalConfigs/>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
      </React.Fragment>
    );
  }
}

export default Main;
