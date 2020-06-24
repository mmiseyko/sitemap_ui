import {
  SITE_MAP_REQUEST,
  SITE_MAP_SUCCESS,
  SITE_MAP_ERROR
} from "../constants/SiteMapActionTypes";

const initialState = {
  siteMap: [],
  error: null,
  loading: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SITE_MAP_REQUEST:
      return {
        ...state, loading: true
      };
    case SITE_MAP_SUCCESS:
      return {
        ...state, siteMap: action.siteMap, loading: false, error: null
      };
    case SITE_MAP_ERROR:
      return {
        ...state, error: action.error, loading: false
      };
    default:
      return state;
  }
};

export default reducer;
