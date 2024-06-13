import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: [
      {
        id: 1,
        title: "Viec 1",
        competed: false,
      },
      {
        id: 2,
        title: "Viec 2",
        competed: false,
      },
      {
        id: 3,
        title: "Viec 3",
        competed: false,
      },
    ],
  },
});

// reducers
const todosReducer = todoSlice.reducer;

// selector
export const todosSelector = (state) => state.todosReducer.allTodos;

export default todosReducer;
