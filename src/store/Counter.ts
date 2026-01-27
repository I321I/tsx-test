import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counterState: 0 },
    reducers: {
        increment: state => { state.counterState += 1 },
        decrement: state => { state.counterState -= 1 }
    }
})
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer