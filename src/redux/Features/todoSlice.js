import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Learn HTML", completed: false },
    { id: 2, title: "Learn CSS", completed: false },
    { id: 3, title: "Learn JS", completed: false },
  ],
  tempTodos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          state.tempTodos.splice(0, state.tempTodos.length);
          state.tempTodos.push(todo);
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      let filteredTodoData = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos.splice(0, state.todos.length);

      let filteredTodo = [...filteredTodoData, action.payload];
      state.todos.push(...filteredTodo);

      state.tempTodos.pop();
    },
    cancelTodo: (state) => {
      state.tempTodos.pop();
    },
  },
});

export const {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  updateTodo,
  cancelTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
