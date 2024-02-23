import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/webfonts/fontawesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './style/normalize.css';
import './style/index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);


