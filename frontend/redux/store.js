import { configureStore } from "@reduxjs/toolkit";
import autSlice from "./authSlice.js";
import jobSlice from "./jobSlice.js";


const store =configureStore({
    reducer:{
        auth:autSlice,
        job:jobSlice

    },
});

export default store;
