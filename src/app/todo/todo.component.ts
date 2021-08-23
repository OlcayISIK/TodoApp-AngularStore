import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './todo';
import { State } from '../../app/app.state';
import * as todoSelectors from './state/todo.selectors';
import * as todoActions from './state/todo.actions';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
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

    addTodo(): void {
        if (this.newTodo.title.trim().length === 0) {
            return;
        }

        let allTodos = [];
        this.store.pipe(select(todoSelectors.getTodos)).subscribe(data => allTodos = data);

        if (allTodos.length === 0) {
            this.newTodo.id = 1;
        }

        this.store.dispatch(new todoActions.CreateTodo(this.newTodo));

        this.initialTodo();
    }

    updateTodo(todo): void {
        this.store.dispatch(new todoActions.UpdateTodo(todo));
    }

    deleteTodo(todo: Todo): void {
        this.store.dispatch(new todoActions.DeleteTodo(todo.id));
    }

    showIdChanged(value: boolean): void {
        this.store.dispatch(new todoActions.ShowTodoId(value));
    }

}
