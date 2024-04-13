import { useReducer } from 'react'
import './App.css'
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { TodoListContext } from './component/context/TodoListContext'
import { actions } from './component/reducer/actions'
import { initialState, reducer } from './component/reducer/reducers'

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    todoList: state.todoList,

    addTodoItem: (todoItemLabel) => {
      dispatch({
        type: actions.ADD_TODO_ITEM,
        todoItemLabel
      })
    },

    removeTodoItem: (todoItemId) => {
      dispatch({
        type: actions.REMOVE_TODO_ITEM,
        todoItemId
      })
    },

    markAsCompleted: (todoItemId) => {
      dispatch({
        type: actions.TOGGLE_COMPLETED,
        todoItemId
      })
    }
  }

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
}

export default function App() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
