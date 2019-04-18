import { normalize, schema } from 'normalizr';
import {
    TodoActionTypes,
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAIL,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    ADD_PENDING,
    REMOVE_PENDING,
} from './actions';
import { TodoItem } from './models';

const name = 'todos';

export const todoSchema = new schema.Entity(name);
export const todoListSchema = [todoSchema];

export interface TodoState {
    allIds: string[];
    entities: {
        [id: string]: TodoItem;
    };
    loaded: boolean;
    loading: boolean;
    pending: string[];
}

export const initialState: TodoState = {
    pending: [],
    entities: {},
    allIds: [],
    loaded: false,
    loading: false,
};

export const reducer = (state = initialState, action: TodoActionTypes) => {
    switch (action.type) {
        case ADD_PENDING:
            return {
                ...state,
                pending: [...state.pending, action.payload]
            };
        case REMOVE_PENDING:
            return {
                ...state,
                pending: state.pending.filter(id => id !== action.payload)
            };
        
        case ADD_TODO_SUCCESS: {
            const { result, entities } = normalize(action.payload, todoSchema);

            return {
                ...state,
                entities: { ...state.entities, ...entities.todos },
                allIds: [...state.allIds, result],
            };
        }
        case LOAD_TODOS: {
            return {
                ...state,
                loaded: false,
                loading: true,
            };
        }

        case LOAD_TODOS_SUCCESS: {
            const { result, entities } = normalize(
                action.payload,
                todoListSchema
            );

            return {
                ...state,
                entities: entities[name],
                allIds: result,
                loaded: true,
                loading: false,
            };
        }

        case ADD_TODO_FAIL:
        case LOAD_TODOS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false,
            };
        }

        default:
            return state;
    }
};

export const getEntities = (state: TodoState) => state.entities;
export const getAllIds = (state: TodoState) => state.allIds;
