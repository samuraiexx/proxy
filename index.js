const express = require('express');
const app = express();
const targetBaseUrl = process.env.REDIRECT_URL;

function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);
const port = process.env.PORT || 3000;
app.listen(port);