const express = require('express');

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load routes
const indexRoutes = require('../routes/index-routes');

app.use('/', indexRoutes);

const usersRoutes = require('./routes/users-routes');

app.use('/', usersRoutes);


module.exports = app;
