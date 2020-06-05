const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('*', createProxyMiddleware({
  target: process.env.PROXY_TARGET_URL,
  changeOrigin: true,
  headers: {
    "Connection": "keep-alive"
  }
}));

const port = process.env.PORT || 3000;
app.listen(port);