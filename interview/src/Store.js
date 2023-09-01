import { configureStore } from "@reduxjs/toolkit";
import student_Actions from '../src/Actions'
export  const Student_store = configureStore({
    reducer:{
        display:student_Actions
    }
})