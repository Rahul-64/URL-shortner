const express = require('express');

const path = require("path")

const DB = require('./model/URL');

const {connections} = require('./connection');

const URLroutes = require("./routes/URL");
const staticroutes = require('./routes/staticRoutes');
const userroutes = require('./routes/user')

const {OnlyLoggedinUser} = require('./middleware/auth')

const { json, urlencoded } = require('body-parser');
const cookieParser = require('cookie-parser');



const app = express();
const port = 8001;


app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())



app.set('view engine' , 'ejs');
app.set('views' , path.resolve('./views'))


connections( 'mongodb://127.0.0.1:27017/url-shortner');

app.use('/' ,staticroutes)

app.use('/URL', OnlyLoggedinUser , URLroutes);

app.use('/user' ,userroutes )



app.listen(port , ()=> console.log("server started"))



