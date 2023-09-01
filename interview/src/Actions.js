import { createSlice } from "@reduxjs/toolkit";
const student_Actions = createSlice({
    name:"student",
    initialState:{
        objects:[]
    },
    reducers:{
        pushObj:(state, action)=>{
            state.objects.push(action.payload);
        }
    }

})
export default student_Actions.reducer;
export const {pushObj} = student_Actions.actions;