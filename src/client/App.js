import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routers from './routers';
import './app.css';

const app = (
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
