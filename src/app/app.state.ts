import { TodoState } from './todo/state/todo.state';

// Representation of the entire app state
export interface State {
    todos: TodoState;
}
