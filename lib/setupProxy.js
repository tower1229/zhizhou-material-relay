"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://m.kugou.com?json=true',

    /*这里写自己的代理地址*/
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
};