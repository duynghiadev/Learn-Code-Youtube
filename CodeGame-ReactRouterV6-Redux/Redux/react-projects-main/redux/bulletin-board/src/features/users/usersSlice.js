import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  status: "idle", // "pending" "succeeded" "failed",
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(USERS_URL);
      return data;
    } catch (err) {
      // if thuunk api not use return a rejected_promise else use thunkApi
      // return Promise.reject(err.message);

      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectAllUsers = (state) => state.users.users;

export const selectUserByIdSelector = (state, userId) =>
  state.users.users.find((u) => u.id === userId);

export default usersSlice.reducer;
