import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import axios from 'axios';

import * as fromActions from './actions';
import { TodoItem } from './models';

export function* loadTodosAsync() {
    try {
        const response = yield call(axios.get, '/api/todos');
        console.log(response.data);
        yield put(fromActions.LoadTodosSuccess(response.data));
    }
    catch(error) {
        console.log(error);
        yield put(fromActions.loadTodosFail(error));
    }
}

export function* watchLoadTodos() {
    yield takeLatest(fromActions.LOAD_TODOS, loadTodosAsync);
}

export function* rootSaga() {
    yield all([fork(watchLoadTodos)]);
  }