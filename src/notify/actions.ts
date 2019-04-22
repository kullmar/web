import { v4 as uuid } from 'uuid';
import { Notify } from './models';

export const ADD_NOTIFY = 'ADD_NOTIFY';
export const REMOVE_NOTIFY = 'REMOVE_NOTIFY';

interface AddNotifyAction {
    type: typeof ADD_NOTIFY;
    payload: Notify;
}

interface RemoveNotifyAction {
    type: typeof REMOVE_NOTIFY;
    payload: string;
}

export type NotifyActionTypes = AddNotifyAction | RemoveNotifyAction;

export const addNotify = (text: string, options?: any): NotifyActionTypes => {
    return {
        type: ADD_NOTIFY,
        payload: {
            id: uuid(),
            text,
            options
        }
    };
}

export const removeNotify = (id: string): NotifyActionTypes => {
    return {
        type: REMOVE_NOTIFY,
        payload: id
    };
}