import { actionTypes } from "../constants/actionTypes";

const initialState = { allUsers: [] };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_USERS_SUCCESS: {
      const users = [...payload];
      return { ...state, allUsers: users };
    }
    case actionTypes.ADD_USER_SUCCESS: {
      const users = [...state.allUsers, payload];
      return { ...state, allUsers: users };
    }
    case actionTypes.EDIT_USER_SUCCESS: {
      const uneditedUsers = state.allUsers.filter((u) => u.id !== payload.id);
      const users = [...uneditedUsers, payload];
      return { ...state, allUsers: users };
    }
    case actionTypes.DELETE_USER_SUCCESS: {
      const otherUsers = state.allUsers.filter((u) => u.id !== payload);
      return { ...state, allUsers: otherUsers };
    }
    default:
      return state;
  }
};

export const selectAllUsers = (state) => state.users.allUsers;

export const getTotalUsersCount = (state) => state.users.allUsers.length;

export const selectUserById = (state, id) =>
  state.users.allUsers.find((u) => u.id === id);

export default userReducer;
