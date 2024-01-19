import React, { useReducer } from 'react'

function UseReducer() {
  const reducer = (state, action) => {
    console.log('state before in reducer:', state, '👉 action before in reducer:', action)

    switch (action.type) {
      case 'Increment':
        return { count: state.count + 1, showText: state.showText }
      case 'ToggleText':
        return { count: state.count, showText: !state.showText }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  console.log('state main:', state)

  return (
    <div id='usereduce'>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'Increment' })
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'ToggleText' })
        }}
      >
        ToggleText
      </button>

      {state.showText && <p>This is a Text</p>}
    </div>
  )
}

export default UseReducer
