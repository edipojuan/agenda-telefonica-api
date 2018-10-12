const express = require('express');
const { json, urlencoded } = require('body-parser');
const mongoose = require('./database');

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

const TelephoneBook = require('./app/models/telephone-book');

const indexRoute = require('./app/routes/index.route');
const telephoneBookRoute = require('./app/routes/telephone-book.route');

app.use('/', indexRoute);
app.use('/telephone-book', telephoneBookRoute);

module.exports = app;
