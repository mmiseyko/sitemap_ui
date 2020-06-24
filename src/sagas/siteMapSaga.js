import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';

import {
  SITE_MAP_REQUEST
} from "../constants/SiteMapActionTypes";
import * as actions from '../actions/siteMapActions';
import * as api from '../api/site_map';
/**
 * worker saga
 * saga to populate store with templates
 */
export function* pushSiteMapToStore() {
  try {
    const json = yield call(api.getSiteMap)
    const siteMap = json.data;

    yield put(actions.getSiteMapSuccess(siteMap));
  } catch (err) {
    yield put(actions.getSiteMapError(err));
  }
}

export const siteMapSaga = [
  takeLatest(SITE_MAP_REQUEST, pushSiteMapToStore)
];
