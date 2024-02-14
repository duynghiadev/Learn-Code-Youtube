export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increaaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT
  }
}
