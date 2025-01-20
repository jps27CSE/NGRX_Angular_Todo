import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { addTodo } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  todoText: string = '';

  constructor(private store: Store<AppState>) {}

  addTodo() {
    if (this.todoText.trim()) {
      this.store.dispatch(addTodo({ text: this.todoText }));
      this.todoText = '';
    }
  }
}
