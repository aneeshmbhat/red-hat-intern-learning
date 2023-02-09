import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/toDoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
