import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },

        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.$id !== action.payload
            )
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map(
                (todo) => todo.$id === action.payload.$id
                ? action.payload
                : todo
            )
        }
    }
})

export const {updateTodo, removeTodo, addTodo, setTodos} = TodoSlice.actions;
export default TodoSlice.reducer;