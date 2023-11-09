import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskType {
  id: string;
  content: string;
  checked: boolean;
}

const initialState: TaskType[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.push(action.payload);
      return state;
    },
    toggleTaskCheck: (state, action: PayloadAction<TaskType>) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.checked = !task.checked;
      }
    },
    clearState: () => {
      return initialState;
    },
  },
});

export const { addTask, clearState, toggleTaskCheck } = tasksSlice.actions;
export default tasksSlice.reducer;
