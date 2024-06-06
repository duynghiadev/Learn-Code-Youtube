// export const markComplete = () => {
//   const markCompleteAction = (dispatch) => {
//     dispatch({
//       type: "MARK_COMPLETE",
//       payload: "my payload",
//     });
//   };
//   return markCompleteAction;
// };

// type write more quickly
export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETE",
    payload: id,
  });
};

export const addTodo = (newTodo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: newTodo,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};
