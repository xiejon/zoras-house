import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./groupsSlice";
import usersReducer from './usersSlice'

const store = configureStore({
  reducer: {
    groups: groupsReducer,
    users: usersReducer
  },
});

export default store;
