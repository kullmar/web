import { call, put, takeLatest, takeEvery, all, fork } from 'redux-saga/effects'
import axios from 'axios';
const uuidv4 = require('uuid/v4');

import * as fromActions from './actions';
import { TodoItem } from './models';

export function* loadTodosAsync() {
    try {
        const response = yield call(axios.get, '/api/todos');
        yield put(fromActions.LoadTodosSuccess(response.data));
    }
    catch(error) {
        yield put(fromActions.loadTodosFail(error));
    }
}

export function* addTodoAsync(action: fromActions.AddTodoAction) {
    try {
        const todo: TodoItem = {
            id: uuidv4(),
            text: action.payload,
            completed: false
        };
        yield call(axios.post, '/api/todos', todo);
        yield put(fromActions.addTodoSuccess(todo));
    }
    catch(error) {
        yield put(fromActions.addTodoFail(error));
    }
}

export function* watchLoadTodos() {
    yield takeLatest(fromActions.LOAD_TODOS, loadTodosAsync);
}

export function* watchAddTodo() {
    yield takeEvery(fromActions.ADD_TODO, addTodoAsync);
}

export function* rootSaga() {
    yield all([
        fork(watchLoadTodos),
        fork(watchAddTodo)
    ]);
  }