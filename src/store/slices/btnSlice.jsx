import { createSlice } from "@reduxjs/toolkit";

const   btnSlice = createSlice({
    name:"buttonSl",
    initialState:false,
    reducers: {
        editTaskBtn(state, action){
            return !state;
        },
    }
});

export {btnSlice};
export const {editTaskBtn} = btnSlice.actions