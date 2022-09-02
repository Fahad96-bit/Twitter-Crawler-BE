import axios from "axios";
const CONFIG = require("../../config/config");

const customAxios = axios.create({
  baseURL: `https://api.twitter.com/2`,
  timeout: 10000,
});

const requestHandler = (request: any) => {
  request.headers.Authorization = CONFIG.authorization;
  request.headers.apiKey = CONFIG.apiKey;
  request.headers.apiSecret = CONFIG.apiSecret;
  request.headers.accessToken = CONFIG.accessToken;
  request.headers.accessTokenSecret = CONFIG.accessTokenSecret;
  request.headers.accept = CONFIG.accept;

  return request;
};

const errorHandler = (error: any) => {
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

export default customAxios;
