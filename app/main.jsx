'use strict'
import React from 'react';
import {render} from 'react-dom';
import store from './store';


import { Provider } from 'react-redux';
import Root from './components/Root';
// import Jokes from './components/Jokes'

render (
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
)