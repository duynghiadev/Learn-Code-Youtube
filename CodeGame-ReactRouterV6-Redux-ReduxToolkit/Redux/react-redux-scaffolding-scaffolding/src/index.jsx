import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/body.jsx';
import './scss/index.scss';

import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<App />, document.getElementById('react-app'));
registerServiceWorker();