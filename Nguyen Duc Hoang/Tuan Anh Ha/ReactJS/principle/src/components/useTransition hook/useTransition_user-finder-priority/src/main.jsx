import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { users } from './fakeuser'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App users={users} />
  </StrictMode>
)
