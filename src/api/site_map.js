import axios from "axios";


export const getSiteMap = () => {
  return axios.get(`${process.env.REACT_APP_API_HOST}/api/v1/site_links`);
};
