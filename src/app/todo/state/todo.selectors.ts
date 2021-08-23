import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.state';

// Selector functions
const getTodoFeatureState = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
    getTodoFeatureState,
    state => state.todos
);

export const getShowTodoId = createSelector(
    getTodoFeatureState,
    state => state.showTodoId
);

export const getError = createSelector(
    getTodoFeatureState,
    state => state.error
);
