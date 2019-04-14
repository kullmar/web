import * as fromTodo from './todo';
import { combineReducers } from 'redux';

export interface State {
    todo: fromTodo.TodoState
}

export const rootReducer = combineReducers({
    todo: fromTodo.reducer
});