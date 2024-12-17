const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');


const URLschema = {
    URL : {
        type : String,
        require : true
    },
    shortURL :{
        type: String,
        require : true
    },
    visitHistory : [{clicksperURL : {type : Number}}]
}

const DB = mongoose.model('URLshortner' , URLschema);

module.exports = DB;