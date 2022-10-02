"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;
exports.get = get;
exports.post = post;

var _axios = _interopRequireDefault(require("axios"));

var _index = require("../utils/index.js");

// import './setupProxy'
// import { getToken } from './auth';
var instance = _axios["default"].create({
  // baseURL: 'http://116.196.125.106:18040',
  baseURL: _index.baseApi,
  timeout: 50000 //   headers: {
  // "HOST":"localhost:3333"
  //     //"Access-Control-Allow-Credentials": true
  //   }

}); // instance.defaults.headers = {
//   Authorization: 'Basic cGxhdGZvcm1fbGljZW5zZV9hZG1pbjpod192ZGlfbGljZW5zZQ==',
// };
//请求发出前拦截


instance.interceptors.request.use(function (config) {
  // if (getToken()) {
  //已经登录的请求头配置，主要用于登录成功后后台返回的token,做权限
  // } else {
  //   // 未登录的请求头配置
  // }
  return config;
}, function (error) {
  return Promise.reject(error);
}); //请求响应拦截

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

function get(url, params) {
  return instance.get(url, {
    params: params
  });
}

function post(url, data) {
  return instance.post(url, data);
}

var _default = instance;
exports["default"] = _default;