const express = require('express');
const auth = require('./auth-route');
const account = require('./account-route');

const router  = new express.Router();
router.use('/auth', auth);
router.use('/account', account);

module.exports = router;