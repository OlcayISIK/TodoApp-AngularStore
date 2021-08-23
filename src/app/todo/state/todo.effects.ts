import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import * as todoActions from './todo.actions';

@Injectable()
export class TodoEffects {

    constructor(private todoService: TodoService, private actions$: Actions) {
    }

    @Effect()
    loadTodos$: Observable<Action> = this.actions$.pipe(
        ofType(todoActions.TodoActionTypes.Load),
        mergeMap((action: todoActions.Load) => this.todoService.getTodos().pipe(
            map((todos: Todo[]) => (new todoActions.LoadSuccess(todos))),
            catchError(err => of(new todoActions.LoadFail(err)))
        )
        )
    );

    @Effect()
    createTodo$: Observable<Action> = this.actions$.pipe(
        ofType(todoActions.TodoActionTypes.CreateTodo),
        map((action: todoActions.CreateTodo) => action.payload),
        mergeMap((todo: Todo) => this.todoService.createTodo(todo).pipe(
            map(newTodo => (new todoActions.CreateTodoSuccess(newTodo))),
            catchError(err => of(new todoActions.CreateTodoFail(err)))
        )
        )
    );

    @Effect()
    updateTodo$: Observable<Action> = this.actions$.pipe(
        ofType(todoActions.TodoActionTypes.UpdateTodo),
        map((action: todoActions.UpdateTodo) => action.payload),
        mergeMap((todo: Todo) => this.todoService.updateTodo(todo).pipe(
            map(updatedTodo => (new todoActions.UpdateTodoSuccess(updatedTodo))),
            catchError(err => of(new todoActions.UpdateTodoFail(err)))
        )
        )
    );

    @Effect()
    deleteTodo$: Observable<Action> = this.actions$.pipe(
        ofType(todoActions.TodoActionTypes.DeleteTodo),
        map((action: todoActions.DeleteTodo) => action.payload),
        mergeMap((todoId: number) => this.todoService.deleteTodo(todoId).pipe(
            map(() => (new todoActions.DeleteTodoSuccess(todoId))),
            catchError(err => of(new todoActions.DeleteTodoFail(err)))
        )
        )
    );
}
