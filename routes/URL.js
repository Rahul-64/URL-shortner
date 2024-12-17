const {URLshortner , URLredirect , URLanalytics} = require('../controller/URL');
const express = require('express')


const router = express.Router();


router.post('/URL' , URLshortner)

router.get('/URL/:shortid' , URLredirect)

router.get('/URL/analytics/:shortid' , URLanalytics)

module.exports = router
