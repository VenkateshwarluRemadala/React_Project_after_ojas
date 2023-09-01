import { configureStore } from "@reduxjs/toolkit";
import employeeDataActions from '../src/Actions'
export  const employeeDataStore = configureStore({
    reducer:employeeDataActions
})