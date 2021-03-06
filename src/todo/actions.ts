import { TodoItem } from './models';

// actions
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

export const ADD_PENDING = 'ADD_PENDING';
export const REMOVE_PENDING = 'REMOVE_PENDING';

export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_FAIL = 'LOAD_TODOS_FAIL';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

// action interfaces
export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: string;
}
export interface AddTodoSuccessAction {
    type: typeof ADD_TODO_SUCCESS;
    payload: TodoItem;
}
export interface AddTodoFailAction {
    type: typeof ADD_TODO_FAIL;
    payload: any;
}

export interface AddPendingAction {
    type: typeof ADD_PENDING,
    payload: string;
}
export interface RemovePendingAction {
    type: typeof REMOVE_PENDING,
    payload: string;
}

export interface LoadTodosAction {
    type: typeof LOAD_TODOS;
}
export interface LoadTodosFailAction {
    type: typeof LOAD_TODOS_FAIL;
    payload: any;
}
export interface LoadTodosSuccessAction {
    type: typeof LOAD_TODOS_SUCCESS;
    payload: TodoItem[];
}

// action creators
export const addTodo = (text: string): AddTodoAction => {
    return {
        type: ADD_TODO,
        payload: text
    };
};
export const addTodoFail = (error: any): AddTodoFailAction => {
    return {
        type: ADD_TODO_FAIL,
        payload: error,
    };
};
export const addTodoSuccess = (todo: TodoItem): AddTodoSuccessAction => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: todo,
    };
};

export const addPending = (id: string): AddPendingAction => {
    return {
        type: ADD_PENDING,
        payload: id
    }
}
export const removePending = (id: string): RemovePendingAction => {
    return {
        type: REMOVE_PENDING,
        payload: id
    }
}

export const loadTodos = (): LoadTodosAction => {
    return {
        type: LOAD_TODOS,
    };
};
export const loadTodosFail = (error: any): LoadTodosFailAction => {
    return {
        type: LOAD_TODOS_FAIL,
        payload: error,
    };
};
export const LoadTodosSuccess = (todos: TodoItem[]): LoadTodosSuccessAction => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: todos,
    };
};

export type TodoActionTypes =
    | AddTodoAction
    | AddTodoFailAction
    | AddTodoSuccessAction
    | LoadTodosAction
    | LoadTodosFailAction
    | LoadTodosSuccessAction
    | AddPendingAction
    | RemovePendingAction;
