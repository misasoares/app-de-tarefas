import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TaskType {
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
    clearState: () => {
      return initialState;
    },
  },
});

export const { addTask, clearState } = tasksSlice.actions;
export default tasksSlice.reducer;
