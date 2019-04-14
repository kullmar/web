import { createSelector } from 'reselect'

import { State } from "../rootReducer";
import * as fromReducer from './reducer';

export const getTodoState = (state: State): fromReducer.TodoState => state.todo;

export const getAllTodos = createSelector(
    getTodoState,
    (todo: fromReducer.TodoState) => Object.values(todo.entities)
);