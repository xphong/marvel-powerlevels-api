const express = require('express');
const controller = require('./powerlevels.controller');

const router = express.Router();

router.get('/', controller.get);

module.exports = router;
