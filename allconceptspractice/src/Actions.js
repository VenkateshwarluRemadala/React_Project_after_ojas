import { createSlice } from "@reduxjs/toolkit";
const employeeDataActions = createSlice({
    name:"employeeActions",
    initialState:[],
    reducers:{
        setTotalData:(state, action)=>{  
            state.push(action.payload);
        },
        updateObject:(state, action)=>{
            state.splice(action.payload.index,1, action.payload.updatedObject);
        }
    }
})
export default employeeDataActions.reducer;
export const {setTotalData} = employeeDataActions.actions;
export const {updateObject} = employeeDataActions.actions;