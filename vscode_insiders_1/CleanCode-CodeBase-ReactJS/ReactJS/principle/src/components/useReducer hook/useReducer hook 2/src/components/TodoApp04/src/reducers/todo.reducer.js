import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuidv4(),
          task: action.task,
          completed: false
        }
      ]

    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id)

    case 'TOGGLE':
      return state.map((todo) => {
        if (todo.id === action.id)
          return {
            ...todo,
            completed: !todo.completed
          }
        return todo
      })

    case 'UPDATE':
      return state.map((todo) => {
        if (todo.id === action.id)
          return {
            ...todo,
            task: action.newTask
          }
        return todo
      })

    default:
      return state
  }
}

export default reducer
