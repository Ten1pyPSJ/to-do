import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  todos: string[];
  todo1: string[];
}

const initialState: TodoState = {
  todos: [],
  todo1: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
      state.todo1.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
