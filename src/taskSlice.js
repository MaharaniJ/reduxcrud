import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TaskList: [],
  seletedTask: {},
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      const task = { ...action.payload, id };
      state.TaskList.push(task);
    },
    updateTaskList: (state, action) => {
      state.TaskList = state.TaskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    removeFromTaskList: (state, action) => {
      state.TaskList = state.TaskList.filter(
        (task) => task.id === action.payload.id
      );
    },
    setseletedTask:(state, action) => {
        state.seletedTask = action.payload
    }
  },
});

export const { addTaskToList, updateTaskList, removeFromTaskList, setseletedTask } =
  taskSlice.actions;
export default taskSlice.reducer;
