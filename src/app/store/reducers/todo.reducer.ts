import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from '../actions/todo.actions';

export interface Todo {
  id: number;
  text: string;
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => [
    ...state,
    {
      id: Date.now(),
      text,
    },
  ]),
  on(removeTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
);
