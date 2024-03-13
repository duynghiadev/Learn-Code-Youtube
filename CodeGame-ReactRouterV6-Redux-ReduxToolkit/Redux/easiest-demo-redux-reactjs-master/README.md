Link github: https://github.com/logisticinfotech/easiest-demo-redux-reactjs

# Easiest React Redux Demo with little UI state managment like tab, input, select, checkbox, radio

Purpose of this demo is to understand redux easily. You can find step by step guide [here](https://www.logisticinfotech.com/blog/easiest-demo-to-learn-redux-in-reactjs-with-code-example/) to understand this demo properly.

## React Redux configuration

First install `react-redux`

```bash
npm install react-redux --save
```

Now, you need to define provider and store in index.js

```jsx
import { Provider } from 'react-redux'
import { store } from './reducers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Now, we need to create two files :

1. action/index.js

```jsx
export const tabClicked = (activeTab) => ({
  type: 'tabClicked',
  activeTab: activeTab
})
```

2. reducers/index.js

```jsx
import { combineReducers, createStore } from 'redux'

// Initial State
const initialState = {
  activeTab: 1
}

// reducers part
export const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tabClicked':
      return {
        ...state,
        activeTab: action.activeTab
      }
    default:
      return state
  }
}

export const reducers = combineReducers({
  actionReducer
})

// store part
export const store = createStore(reducers)
```

## How to use in component

```jsx
import { tabClicked } from './../../actions'

class uplicateTabComponent extends Component {
  render() {
    return <div></div>
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.actionReducer.activeTab
  }
}

const mapDispatchToProps = {
  tabClicked
}

const TabContainer = connect(mapStateToProps, mapDispatchToProps)(TabComponent)
```

We can use props and event in html. You just need to put html in redner function in component.

```
<a className={"nav-item nav-link" + (this.props.activeTab === 1 ? ' active' : '')} id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true" onClick={() => this.props.tabClicked(1)}>Tab 1</a>
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Further help

Checkout full blog [here](https://www.logisticinfotech.com/blog/easiest-demo-to-learn-redux-in-reactjs-with-code-example/)
