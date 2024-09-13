const express = require('express');
const cookieParser = require('cookie-parser');
const removeHeader = require('../middleware/removeHeader');
const path = require('path');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.json());
  app.use(cookieParser());
  app.use(removeHeader);
};

module.exports = serverConfig;