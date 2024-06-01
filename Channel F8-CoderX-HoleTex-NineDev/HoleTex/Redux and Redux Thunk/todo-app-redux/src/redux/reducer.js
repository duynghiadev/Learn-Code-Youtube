const initValue = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: true, priority: "Low" },
  ],
};

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: 4,
            name: "Playing football",
            completed: false,
            priority: "High",
          },
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
