import { Notify } from "./models";
import _ from 'lodash';

import { NotifyActionTypes, ADD_NOTIFY, REMOVE_NOTIFY } from './actions';

export interface NotifyState {
    allIds: string[];
    entities: { [id:string]: Notify };
};

export const initialState: NotifyState = {
    allIds: [],
    entities: {}
};

export const reducer = (state = initialState, action: NotifyActionTypes) => {
    switch (action.type) {
        case ADD_NOTIFY:
            return {
                allIds: [...state.allIds, action.payload.id],
                entities: {...state.entities, [action.payload.id]: action.payload }
            }

            case REMOVE_NOTIFY:
            return {
                allIds: state.allIds.filter(id => id != action.payload),
                entities: _.omit(state.entities, action.payload)
            };
    }
};
