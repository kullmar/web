import { normalize, schema } from 'normalizr';
import { TodoActionTypes, LOAD_TODOS, ADD_TODO, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAIL } from "./actions";
import { TodoItem } from "./models";

export const todo = new schema.Entity('todos');

export interface TodoState {
    entities: { 
        [todos: string]: TodoItem 
    };
    todos: string[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: TodoState = {
    entities: {},
    todos: [],
    loaded: false,
    loading: false
}

export const reducer = (state = initialState, action: TodoActionTypes) => {
    switch(action.type) {
        case ADD_TODO: {
            const { result, entities } = normalize(action.payload, todo);
            return {
                ...state,
                entities: {...state.entities, entities},
                todos: [...state.todos, ...result.todos]
            };
        }

        case LOAD_TODOS: {
            return {
                ...state,
                loaded: false,
                loading: true
            };
        }
        case LOAD_TODOS_SUCCESS: {
            const { result, entities } = normalize(action.payload, todo);
            console.log(action.payload);
            console.log(result);
            console.log(entities);
            return {
                entities,
                todos: result.todos,
                loaded: true,
                loading: false
            };
        }
        case LOAD_TODOS_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }
        
        default:
            return state;
    }
}