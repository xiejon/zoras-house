import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  groups: [],
  status: "idle",
  error: null,
};

export const fetchGroups = createAsyncThunk("tasks/fetchGroups", async () => {
  const response = await axios.get("http://127.0.0.1:5000/data");
  return response.data.user_groups;
});

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGroups.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.groups = action.payload;
      })
      .addCase(fetchGroups.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAllGroups = (state) => state.groups.groups;
export const getGroupsStatus = (state) => state.groups.status;
export const getGroupsError = (state) => state.groups.error;

export default groupsSlice.reducer;
