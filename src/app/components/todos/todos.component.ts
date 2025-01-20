import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { Todo } from '../../store/reducers/todo.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { removeTodo } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todos',
  imports: [NgForOf, AsyncPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select((state) => state.todos);
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}
