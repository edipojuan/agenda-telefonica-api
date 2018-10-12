const express = require('express');
const { json, urlencoded } = require('body-parser');

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

const indexRoute = require('./app/routes/index-route');

app.use('/', indexRoute);

module.exports = app;
