import React from 'react';
import ReactDOM from 'react-dom/client';
import { i18nChangeLanguage } from '@wangeditor/editor';
import { Provider } from 'react-redux';
import store from '@/store';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import '@wangeditor/editor/dist/css/style.css';
import '@/css/index.scss';
i18nChangeLanguage('en');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
