import { Action } from '@ngrx/store';
import { Todo } from '../todo';

export enum TodoActionTypes {
  ShowTodoId        = '[Todo] Display Todo Id',
  Load              = '[Todo] Load',
  LoadSuccess       = '[Todo] Load Success',
  LoadFail          = '[Todo] Load Fail',
  CreateTodo        = '[Todo] Create Todo',
  CreateTodoSuccess = '[Todo] Create Todo Success',
  CreateTodoFail    = '[Todo] Create Todo Fail',
  UpdateTodo        = '[Todo] Update Todo',
  UpdateTodoSuccess = '[Todo] Update Todo Success',
  UpdateTodoFail    = '[Todo] Update Todo Fail',
  DeleteTodo        = '[Todo] Delete Todo',
  DeleteTodoSuccess = '[Todo] Delete Todo Success',
  DeleteTodoFail    = '[Todo] Delete Todo Fail'
}

// ShowTodoId
export class ShowTodoId implements Action {
  readonly type = TodoActionTypes.ShowTodoId;
  constructor(public payload: boolean) { }
}

// Load
export class Load implements Action {
  readonly type = TodoActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = TodoActionTypes.LoadSuccess;
  constructor(public payload: Todo[]) { }
}
export class LoadFail implements Action {
  readonly type = TodoActionTypes.LoadFail;
  constructor(public payload: string) { }
}

// Create
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: Todo) { }
}
export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: Todo) { }
}
export class CreateTodoFail implements Action {
  readonly type = TodoActionTypes.CreateTodoFail;
  constructor(public payload: string) { }
}

// Update
export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  constructor(public payload: Todo) { }
}
export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;
  constructor(public payload: Todo) { }
}
export class UpdateTodoFail implements Action {
  readonly type = TodoActionTypes.UpdateTodoFail;
  constructor(public payload: string) { }
}

// Delete
export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;
  constructor(public payload: number) { }
}
export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;
  constructor(public payload: number) { }
}
export class DeleteTodoFail implements Action {
  readonly type = TodoActionTypes.DeleteTodoFail;
  constructor(public payload: string) { }
}

// Union the valid types
export type TodoActions = Load
  | LoadSuccess
  | LoadFail
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoFail
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFail
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFail
  | ShowTodoId;
