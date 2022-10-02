import axios from 'axios';
import {baseApi} from '../utils/index.js'
// import './setupProxy'
// import { getToken } from './auth';
const instance = axios.create({
  // baseURL: 'http://116.196.125.106:18040',
  baseURL: baseApi,
  timeout: 50000,
//   headers: {
// "HOST":"localhost:3333"
//     //"Access-Control-Allow-Credentials": true

//   }
});
// instance.defaults.headers = {
//   Authorization: 'Basic cGxhdGZvcm1fbGljZW5zZV9hZG1pbjpod192ZGlfbGljZW5zZQ==',
// };
//请求发出前拦截
instance.interceptors.request.use(
  function (config) {
    // if (getToken()) {
    //已经登录的请求头配置，主要用于登录成功后后台返回的token,做权限
    // } else {
    //   // 未登录的请求头配置
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
//请求响应拦截
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

export function post(url, data) {
  return instance.post(url, data);
}
export default instance;