import { store } from '../configureStore'

export const increment = (step: number) => {
  store.dispatch({
    type: 'INCREMENT',
    payload: {
      step
    }
  })
}

export const decrement = (step: number) => {
  store.dispatch({
    type: 'DECREMENT',
    payload: {
      step
    }
  })
}
