import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"task",
    initialState:[],
    reducers: {
        addTask(state, action){
            state.push(action.payload);
            // console.log(action.payload);
        },
        editTask(state, action){
            const { id, title, deadline, status } = action.payload;
            const existingTask = state.find(task => task.id === id);
            if (existingTask) {
                existingTask.title = title;
                existingTask.deadline = deadline;
                existingTask.status = status;
            }
        },
        deleteTask(state, action){
            return state.filter(task => task.id !== action.payload);
        },
        deleteAllTasks(state, action){}
    }
});

export {taskSlice};
export const {addTask, editTask, deleteTask, deleteAllTasks} = taskSlice.actions