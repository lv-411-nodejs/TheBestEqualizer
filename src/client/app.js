import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Routers from './routers';

const app = (
  <Provider store={store}>
    <Routers />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
