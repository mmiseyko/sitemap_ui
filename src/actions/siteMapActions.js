import {
  SITE_MAP_REQUEST,
  SITE_MAP_SUCCESS,
  SITE_MAP_ERROR
} from "../constants/SiteMapActionTypes";

export const getSiteMapAction = () => ({
  type: SITE_MAP_REQUEST
})

export const getSiteMapSuccess = siteMap => ({
  type: SITE_MAP_SUCCESS,
  siteMap
})

export const getSiteMapError = error => ({
  type: SITE_MAP_ERROR,
  error,
});
