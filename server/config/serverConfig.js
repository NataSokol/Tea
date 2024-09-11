const express = require('express');

const serverConfig = (app) => {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
}

module.exports = serverConfig;