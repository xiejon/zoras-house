import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: {},
  users: [],
  status: "idle",
  currUserStatus: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://127.0.0.1:5000/search");
  return response.data.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currUserStatus = "succeeded";
      state.currentUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUser } = usersSlice.actions;

export const getAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export const getCurrUser = (state) => state.users.currentUser;
export const getCurrUserStatus = (state) => state.users.currUserStatus;

export default usersSlice.reducer;
