import { createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
    name: "todoListState",
    initialState: { todoListState: [] as { id: string, content: string }[] },
    reducers: {
        addTodo: (state, action) => { state.todoListState.push(action.payload) },
        removeTodo: (state, action) => {
            const rmId = action.payload.id
            state.todoListState = state.todoListState.filter(item => { item.id !== rmId })
        }
    }
})
export const { addTodo, removeTodo } = todoList.actions
export default todoList.reducer