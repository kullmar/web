import { createSelector } from 'reselect'

import { State } from "../rootReducer";
import * as fromReducer from './reducer';

export const getTodoState = (state: State) => state.todo;
export const getTodoEntities = createSelector(
    getTodoState,
    fromReducer.getEntities
);
export const getAllTodoIds = createSelector(
    getTodoState,
    fromReducer.getAllIds
);

export const getAllTodos = createSelector(
    getAllTodoIds,
    getTodoEntities,
    (ids, entities) => ids.map(id => entities[id])
);