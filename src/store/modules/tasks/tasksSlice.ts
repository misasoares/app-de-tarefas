import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskType {
  id: string;
  content: string;
  checked: boolean;
}

const initialState: TaskType[] = [];
const storageLocal = localStorage.getItem("tasks");

const tasksSlice = createSlice({
  name: "tasks",
  initialState: storageLocal ? JSON.parse(storageLocal) : initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    toggleTaskCheck: (state, action: PayloadAction<TaskType>) => {
      const task = state.find((task: TaskType) => task.id === action.payload.id);
      if (task) {
        task.checked = !task.checked;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    deleteSelectedTask: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return state;
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const { addTask, clearState, toggleTaskCheck, deleteSelectedTask } = tasksSlice.actions;
export default tasksSlice.reducer;
