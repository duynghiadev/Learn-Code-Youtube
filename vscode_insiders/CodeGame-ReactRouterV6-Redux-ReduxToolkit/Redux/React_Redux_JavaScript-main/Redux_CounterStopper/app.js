import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'

import Platform from './containers/Platform'

const App = () => (
  // <div className="root">
  <div>
    <Provider store={store}>
      <Platform />
      {/*{console.log(globalState)}*/}
    </Provider>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App />)
// ReactDOM.render(<App/>, document.getElementById("app"));
