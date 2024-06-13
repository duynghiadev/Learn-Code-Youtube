# React `useContext` and `useReducer` Hooks.

Created with CodeSandbox

### A simple example of React `useContext` and `useReducer` Hooks available in React that can be used as a replacement for Redux.

Instead of using Redux as state management. We can use the inbuilt hooks that are available in React itself. Eventually, you can replace or move the project that is dependent on Redux to the inbuilt hooks.

> The `useContext` hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. `Context` defined will be available to all the child components without involving “props”. `React Context` is a powerful state management feature in React. Instead of passing the props down through each component, `React Context` allows you to broadcast props to the components below.

> The `useReducer` hook is used for complex state manipulations and state transitions. `useReducer` is a React hook function that accepts a reducer function, and an initial state. `const [state, dispatch] = useReducer(reducer, initialState);` This hook function returns an array with 2 values.

I am using the usual use case of the `Todo List` example for easy understanding.

Step 1: Initial State and Actions

```javascript
//Initial State and Actions
const initialState = {
  todoList: []
}

const actions = {
  ADD_TODO_ITEM: 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED'
}
```

Step 2: Reducers to Handle Actions

```javascript
//Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO_ITEM:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().valueOf(),
            label: action.todoItemLabel,
            completed: false
          }
        ]
      }
    case actions.REMOVE_TODO_ITEM: {
      const filteredTodoItem = state.todoList.filter(
        (todoItem) => todoItem.id !== action.todoItemId
      )
      return { todoList: filteredTodoItem }
    }
    case actions.TOGGLE_COMPLETED: {
      const updatedTodoList = state.todoList.map((todoItem) =>
        todoItem.id === action.todoItemId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      )
      return { todoList: updatedTodoList }
    }
    default:
      return state
  }
}
```

Breakdown of the Code: We use the usual Switch Case Statements to Evaluate the Actions.

- First Case `ADD_TODO_ITEM`

  - action spread the existing list and add a new todo item to the list with id(unique-ish), label(user-entered value), and completed flag.

- Second Case `REMOVE_TODO_ITEM`

  - action filter out the to-do item that needs to be removed based on the id.

- Third Case `TOGGLE_COMPLETED`

  - action loop through all the to-do items and toggle the completed flag based on the id.

Step 3: Create the Context and Provider to Dispatch the Actions.

```javascript
//Context and Provider
const TodoListContext = React.createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel })
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId })
    },
    markAsCompleted: (todoItemId) => {
      dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId })
    }
  }

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>
}
```

In this step, we create the `TodoListContext` and a `Provider` function that returns the `TodoListContext's Provider`.

Here is the Breakdown of the Code.

- Here we pass the reducer function and the initialState to the `useReducer` hook. This will return `state` and `dispatch`. The `state` will have the `initialState`. And the `dispatch` is used to trigger our `actions`, just like in redux.
- In the value object, we have `todoList` state, and three functions `addTodoItem`, `removeTodoItem`, and `markAsCompleted` which trigger `ADD_TODO_ITEM`, `REMOVE_TODO_ITEM`, and `TOGGLE_COMPLETED` actions respectively.
- We pass the value object as a prop to the `TodoListContext's Provider`, so that we can access it using `useContext`.

Step 4: Create the Two Components that will use the store.

`AddTodo` & `TodoList`

```javascript
// AddTodo Component with Input field and Add Button
const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodoItem } = useContext(TodoListContext)

  return (
    <>
      <input
        type='text'
        value={inputValue}
        placeholder={'Type and add todo item'}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoItem(inputValue)
          setInputValue('')
        }}
      >
        Add
      </button>
    </>
  )
}
```

In this `AddTodo` component, we use the `useContext` to subscribe to our `TodoListContext` and getting `addTodoItem` dispatch function.

```javascript
//TodoList Component to show the list
const TodoList = () => {
  const { todoList, removeTodoItem, markAsCompleted } = useContext(TodoListContext)
  return (
    <ul>
      {todoList.map((todoItem) => (
        <li
          className={`todoItem ${todoItem.completed ? 'completed' : ''}`}
          key={todoItem.id}
          onClick={() => markAsCompleted(todoItem.id)}
        >
          {todoItem.label}
          <button className='delete' onClick={() => removeTodoItem(todoItem.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}
```

In `TodoList` component, we are using `useContext` to subscribe to the `TodoListContext` and getting the `todoList` state, `removeTodoItem` and `markAsCompleted` dispatch functions. We are mapping through `todoList` and rendering the `to-do` items and a remove `(X) button` next to them. On clicking on an item we are marking it as complete and when clicking on `X` the button we are removing it from the list.

Step 5: Final step, wrapping the above two components to the Provider.

```javascript
//Final Wrapper
export default function App() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
```

Here’s the working sample version of the code and the preview. You can Open the Sandbox for the full version of the code.

<a href="https://codesandbox.io/s/xenodochial-goodall-94txh?from-embed=&file=/src/App.js" target="_blank">Example Link for the Code in CodeSandbox</a>
