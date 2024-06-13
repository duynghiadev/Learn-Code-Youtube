import { INCREMENT, DECREMENT } from './actionTypes'

const increase = () => {
  return {
    type: INCREMENT,
  }
}

const decrease = () => {
  return {
    type: DECREMENT,
  }
}

export default { increase, decrease }
