import axios from 'axios';

import {BASE_URL} from './configs';

// TODO: Change name of APIKit
let APIKit = axios.create({
  baseURL: `${BASE_URL}/`,
  timeout: 10000,
});

let authRequestInterceptor;

export const setClientToken = token => {
  APIKit.interceptors.request.eject(authRequestInterceptor);

  authRequestInterceptor = APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization =
      // 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzA2NDU3LCJqdGkiOiI3MDhkMDNkOGMyMGM0ODlmOGFkZjk5YmRkYWNiNjE3NCIsInVzZXJfaWQiOjF9.mcmO5Yk3F8vpNwn-n1sR9y_ma_PSQoYXpJ-Hl20b1_g';
      config.headers.Authorization = `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzA2NDU3LCJqdGkiOiI3MDhkMDNkOGMyMGM0ODlmOGFkZjk5YmRkYWNiNjE3NCIsInVzZXJfaWQiOjF9.mcmO5Yk3F8vpNwn-n1sR9y_ma_PSQoYXpJ-Hl20b1_g`;
    return config;
  });
};

export default APIKit;
