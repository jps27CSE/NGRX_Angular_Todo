import { Todo, todoReducer } from './todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  todos: Todo[];
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
};
