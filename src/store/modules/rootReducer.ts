import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/tasksSlice";

export default combineReducers({
  tasks: tasksSlice,
});
