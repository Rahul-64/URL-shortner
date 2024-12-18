const {URLshortner , URLredirect , URLanalytics} = require('../controller/URL');
const express = require('express')


const router = express.Router();


router.post('/' , URLshortner)

router.get('/:shortid' , URLredirect)

router.get('/analytics/:shortid' , URLanalytics)

module.exports = router
