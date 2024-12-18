const express = require('express')
const {searchhandler } = require('../controller/URL');
const router = express.Router();


router.get('/search', searchhandler )

router.get('/signUp' ,(req , res)=>{
    res.render('signUp')
} )

router.get('/login' , (req , res)=>{
    res.render('login')
})

module.exports = router
