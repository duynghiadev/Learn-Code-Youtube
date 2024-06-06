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
export const markComplete = () => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETE",
    payload: "my payload",
  });
};
