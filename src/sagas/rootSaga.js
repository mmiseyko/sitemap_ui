import { all } from 'redux-saga/effects';
import { siteMapSaga } from './siteMapSaga';

export default function* rootSaga() {
  yield all([
    ...siteMapSaga
  ]);
}
