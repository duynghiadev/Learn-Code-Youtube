import React, { useReducer } from 'react'

// 能放外面的就方面，亲
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)
const initialState = { r: 0, g: 0, b: 0 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'UP_RED':
      return { ...state, r: limitRGB(state.r + 50) }
    case 'DOWN_RED':
      return { ...state, r: limitRGB(state.r - 50) }
    case 'UP_GREEN':
      return { ...state, g: limitRGB(state.r + 50) }
    case 'DOWN_GREEN':
      return { ...state, g: limitRGB(state.r - 50) }
    case 'UP_BLUE':
      return { ...state, b: limitRGB(state.r + 50) }
    case 'DOWN_BLUE':
      return { ...state, b: limitRGB(state.r - 50) }
    default:
      return initialState
  }
}

const UseReducer = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1 style={{ color: `rgb(${r},${g},${b})` }}>useReducer Example</h1>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <div>
        <span>r </span>
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
        <span>g </span>
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
        <span>b </span>
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
