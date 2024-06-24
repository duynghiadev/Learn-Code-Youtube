import React, { useReducer } from 'react'

// Put what you can outside, it's more convenient
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)
const initialState = { red: 0, green: 0, blue: 0 }
console.log('initialState:', initialState)

const reducer = (state, action) => {
  console.log('state in reducer:', state)
  console.log('action in reducer:', action)
  switch (action.type) {
    case 'UP_RED':
      return { ...state, red: limitRGB(state.red + 50) }
    case 'DOWN_RED':
      return { ...state, red: limitRGB(state.red - 50) }
    case 'UP_GREEN':
      return { ...state, green: limitRGB(state.green + 50) }
    case 'DOWN_GREEN':
      return { ...state, green: limitRGB(state.green - 50) }
    case 'UP_BLUE':
      return { ...state, blue: limitRGB(state.blue + 50) }
    case 'DOWN_BLUE':
      return { ...state, blue: limitRGB(state.blue - 50) }
    default:
      return initialState
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('color red:', state.red)
  console.log('color green:', state.green)
  console.log('color blue:', state.blue)

  return (
    <div>
      <h1 style={{ color: `rgb(${state.red},${state.green},${state.blue})` }}>
        useReducer Example
      </h1>

      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <div>
        <span>red</span>
        <button
          onClick={() => {
            dispatch({ type: 'UP_RED' })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DOWN_RED' })
          }}
        >
          -
        </button>
      </div>

      <div>
        <span>green</span>
        <button
          onClick={() => {
            dispatch({ type: 'UP_GREEN' })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DOWN_GREEN' })
          }}
        >
          -
        </button>
      </div>

      <div>
        <span>blue</span>
        <button
          onClick={() => {
            dispatch({ type: 'UP_BLUE' })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DOWN_BLUE' })
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default UseReducer
