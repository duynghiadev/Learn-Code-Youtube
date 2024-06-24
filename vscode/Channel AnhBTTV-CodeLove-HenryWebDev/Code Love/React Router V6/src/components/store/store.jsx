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
    // cố tình làm component App_2 mout lại
    ReactDOM.createRoot(document.getElementById('root')).render(<App_2 />)
  }
}
