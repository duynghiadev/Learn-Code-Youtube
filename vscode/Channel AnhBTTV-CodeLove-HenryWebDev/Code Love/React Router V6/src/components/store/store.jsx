import ReactDOM from 'react-dom/client'
import App_2 from '../../App_2'

export const store = {
  // state
  state: {
    counter: 0
  },

  // action change state
  increment: () => {
    store.state.counter++
  },

  decrement: () => {
    store.state.counter--
  }
}
