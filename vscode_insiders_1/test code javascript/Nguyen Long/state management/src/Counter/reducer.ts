interface CounterState {
  count: number
}

interface CounterAction {
  type: 'INCREMENT' | 'DECREMENT'
  payload: {
    step: number
  }
}

const initialState: CounterState = {
  count: 0
}

export const reducerCounter = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload.step
      }
    case 'DECREMENT':
      return {
        count: state.count - action.payload.step
      }
    default:
      return state
  }
}
