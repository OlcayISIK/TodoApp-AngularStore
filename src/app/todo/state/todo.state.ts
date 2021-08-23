import { Todo } from '../todo';

export interface TodoState {
    showTodoId: boolean;
    todos: Todo[];
    error: string;
}
