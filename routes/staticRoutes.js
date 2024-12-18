const express = require('express')
const {staticrouteshandlers} = require('../controller/URL');
const router = express.Router();


router.get('/', staticrouteshandlers)

module.exports = router
