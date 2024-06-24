import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div>
      <h1>useReducer</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
        }}
      >
        Incrment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'toggleShowText' })
        }}
      >
        toggleShowText
      </button>

      {state.showText && <p>This is a text</p>}
      <hr />
    </div>
  )
}

export default ReducerTutorial
