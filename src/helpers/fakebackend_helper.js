import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

export const postJwtLogin = (data) => api.create(url.PUBLIC_URL, data);
