import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slices/taskSlice";
import { btnSlice } from "./slices/btnSlice";

const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        buttonSl: btnSlice.reducer,
    }
});

export default store;