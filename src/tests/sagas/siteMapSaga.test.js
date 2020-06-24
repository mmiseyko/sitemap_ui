import {
  expectSaga
} from 'redux-saga-test-plan';
import * as api from '../../api/site_map';
import siteMapReducer from '../../reducers/siteMapReducer';
import {
  pushSiteMapToStore
} from '../../sagas/siteMapSaga';
import {
  call
} from 'redux-saga/effects';
import {
  throwError
} from 'redux-saga-test-plan/providers';

test('it requests siteMap and set to state', () => {
  const siteMap = {
    full_path: '/home',
    id: 1,
    link_id: 'home',
    name: 'Home',
    relative_path: '/home',
    children: [{
      full_path: '/home/settings',
      id: 5,
      link_id: 'home.settings',
      name: 'Settings',
      relative_path: 'settings',
      children: []
    }]
  }

  const response = {
    data: siteMap
  }

  return expectSaga(pushSiteMapToStore)
    .withReducer(siteMapReducer)
    .provide([
      [call(api.getSiteMap), response]
    ])
    // .put({ type: 'SITE_MAP_SUCCESS', siteMap })
    .hasFinalState({
      siteMap: siteMap,
      error: null,
      loading: false
    })
    .run();
});

test('it handles errors', () => {
  const error = new Error('error');

  return expectSaga(pushSiteMapToStore)
    .withReducer(siteMapReducer)
    .provide([
      [call(api.getSiteMap), throwError(error)]
    ])
    .put({
      type: 'SITE_MAP_ERROR',
      error
    })
    .hasFinalState({
      siteMap: [],
      error: error,
      loading: false
    })
    .run();
});
