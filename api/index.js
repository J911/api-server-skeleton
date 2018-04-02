const express = require('express');
const router = express.Router();

const { getMembers } = require('./modules')

router.get('/users', (req, res)=> getMembers(req, res));

module.exports = router;
