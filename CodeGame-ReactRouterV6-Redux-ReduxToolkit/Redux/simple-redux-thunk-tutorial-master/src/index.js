import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Favicon from 'react-favicon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import counter from './state/counter'
import name from './state/name'
import Counter from './view/couter'
import Name from './view/name'

const reducers = combineReducers({ name, counter })

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <span>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        <Counter />
        <Name />
      </span>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
