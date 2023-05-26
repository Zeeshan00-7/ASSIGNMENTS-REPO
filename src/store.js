import { createStore } from 'redux';

// Define the initial state
const initialState = {
  todos: [],
};

// Define reducer function to handle actions
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(todoReducer);

export default store;
