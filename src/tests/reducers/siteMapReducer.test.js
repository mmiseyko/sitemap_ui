import siteMapReducer from '../../reducers/siteMapReducer'
import * as types from '../../constants/SiteMapActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(siteMapReducer(undefined, {})).toEqual({
      siteMap: [],
      error: null,
      loading: false
    })
  })

  it('should set loading on request', () => {
    expect(siteMapReducer({
      siteMap: [],
      error: null,
      loading: false
    }, {
      type: types.SITE_MAP_REQUEST
    })).toEqual({
      siteMap: [],
      error: null,
      loading: true
    })
  })

  it('should set state on request', () => {
    expect(siteMapReducer({
      siteMap: [],
      error: null,
      loading: false
    }, {
      type: types.SITE_MAP_REQUEST
    })).toEqual({
      siteMap: [],
      error: null,
      loading: true
    })
  })

  it('should set state on request success', () => {
    expect(siteMapReducer({
      siteMap: [],
      error: new Error('error'),
      loading: true
    }, {
      type: types.SITE_MAP_SUCCESS,
      siteMap: ['object1', 'object2']
    })).toEqual({
      siteMap: ['object1', 'object2'],
      error: null,
      loading: false
    })
  })

  it('should set state on request error', () => {
    const error = new Error('error');
    expect(siteMapReducer({
      siteMap: [],
      error: null,
      loading: true
    }, {
      type: types.SITE_MAP_ERROR,
      error
    })).toEqual({
      siteMap: [],
      error: error,
      loading: false
    })
  })
})
