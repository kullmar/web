import { TodoItem } from "./models";

// actions
export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_FAIL = 'LOAD_TODOS_FAIL';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

// action interfaces
export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: TodoItem
}

export interface LoadTodosAction {
    type: typeof LOAD_TODOS
}
export interface LoadTodosFailAction {
    type: typeof LOAD_TODOS_FAIL,
    payload: any
}
export interface LoadTodosSuccessAction {
    type: typeof LOAD_TODOS_SUCCESS,
    payload: TodoItem[]
}

// action creators
export const addTodo = (todo: TodoItem): AddTodoAction => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const loadTodos = (): LoadTodosAction => {
    return {
        type: LOAD_TODOS
    }
};
export const loadTodosFail = (error: any): LoadTodosFailAction => {
    return {
        type: LOAD_TODOS_FAIL,
        payload: error
    }
}
export const LoadTodosSuccess = (todos: TodoItem[]): LoadTodosSuccessAction => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: todos
    }
}

export type TodoActionTypes = AddTodoAction | LoadTodosAction | LoadTodosFailAction | LoadTodosSuccessAction;