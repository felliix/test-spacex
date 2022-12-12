import { request } from "graphql-request";

const api = (query: string) =>
  request("https://api.spacex.land/graphql/", query);

export default api;
