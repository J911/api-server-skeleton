const express = require('express');
const bodyParser = require('body-parser');
const api = require('./apis');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1/', api);

module.exports = app;