import { rootSaga as todoSaga } from './todo/sagas';
import { all } from 'redux-saga/effects';

export default function* root() {
    yield all([
        todoSaga()
    ]);
}