import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingContextProvider } from './contexts/ShoppingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ShoppingContextProvider>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </ShoppingContextProvider>
)
