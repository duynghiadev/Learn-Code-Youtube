import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

// reducer thunk
export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.data;
});

export const addTodo = createAsyncThunk("todos/todoAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };

  axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);

  return newTodo;
});

export const deleteTodo = createAsyncThunk(
  "todos/todoDeleted",
  async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

    return todoId;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: [],
  },
  reducers: {
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
  },
  extraReducers: {
    // Get all todos
    [getTodos.pending]: (state, action) => {
      console.log("Fetching todos from backend...");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("Done");
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Failed to get todos!!!");
    },

    // Add todo
    [addTodo.fulfilled]: (state, action) => {
      state.allTodos.unshift(action.payload);
    },

    // Delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

// reducers
const todosReducer = todoSlice.reducer;

// selector
export const todosSelector = (state) => state.todosReducer.allTodos;

// Action export
export const { markComplete, todosFetched } = todoSlice.actions;

export default todosReducer;
