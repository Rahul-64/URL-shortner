const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');


const Userschema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email :{
        type : String, 
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const user = mongoose.model('user' , Userschema);

module.exports = user;