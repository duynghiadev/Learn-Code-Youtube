import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
