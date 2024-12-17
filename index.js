const express = require('express');

const path = require("path")

const DB = require('./model/URL');

const {connections} = require('./connection');

const URLroutes = require("./routes/URL");

const { json, urlencoded } = require('body-parser');



const app = express();
const port = 8001;
app.use(express.json());
app.use(express.urlencoded({extended : true}))



app.set('view engine' , 'ejs');
app.set('views' , path.resolve('./views'))


connections( 'mongodb://127.0.0.1:27017/url-shortner');

app.use('/' , URLroutes);

app.get('/search' , async (req , res)=>{
    const allurls = await DB.find({});
    return res.render('home' , {urls : allurls} );
})



app.listen(port , ()=> console.log("server started"))



