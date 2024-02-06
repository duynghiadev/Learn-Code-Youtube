import { useReducer } from 'react'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'RED_FIVE':
      return {
        ...state,
        count: state.count + payload.count,
        background: payload.background
      }

    case 'GREEN_TEN':
      return {
        ...state,
        count: state.count - payload.count,
        background: payload.background
      }

    default:
      return state
  }
}

const UseReducer = () => {
  const [data, dispatch] = useReducer(reducer, {
    count: 0,
    background: 'white'
  })

  return (
    <div className='container'>
      <div>
        <h1>useReducer hook</h1>

        <div
          style={{
            backgroundColor: `${data.background}`,
            margin: '10px 10px',
            borderRadius: '5px'
          }}
        >
          <h2>Count: {data.count}</h2>
        </div>

        <button
          onClick={() => {
            dispatch({
              type: 'RED_FIVE',
              payload: { count: 5, background: 'red' }
            })
          }}
        >
          <h2>Add 5 and change bgColor to red</h2>
        </button>

        <br />
        <br />

        <button
          onClick={() => {
            dispatch({
              type: 'GREEN_TEN',
              payload: { count: 10, background: 'green' }
            })
          }}
        >
          <h2>Minus 10 and change bgColor to green</h2>
        </button>
      </div>
    </div>
  )
}

export default UseReducer
