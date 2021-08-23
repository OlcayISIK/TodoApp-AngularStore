import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './todo';
import { State } from '../../app/app.state';
import * as todoSelectors from './state/todo.selectors';
import * as todoActions from './state/todo.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newTodo = <Todo>{};
  todos$: Observable<Todo[]>;
  errorMessage$: Observable<string>;
  showTodoId$: Observable<boolean>;

  constructor(private store: Store<State>) {
  }

  initialTodo(): void {
      Object.assign(this.newTodo, { id: null, title: '', complete: false });
  }

  ngOnInit() {
      this.store.dispatch(new todoActions.Load());
      this.todos$ = this.store.pipe(select(todoSelectors.getTodos));
      this.showTodoId$ = this.store.pipe(select(todoSelectors.getShowTodoId));
      this.errorMessage$ = this.store.pipe(select(todoSelectors.getError));
  }
}


