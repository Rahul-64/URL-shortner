const { short } = require('webidl-conversions');
const DB = require('../model/URL');
const { nanoid } = require('nanoid');
const { link } = require('fs');


async function URLshortner(req , res){
    const body = req.body;

    if(!body.url) return res.status(401).json({
        url : body
    });
   
    let shortid = nanoid();
    const existingEntry = await DB.findOne({ URL: body.url });
    
    if(!existingEntry){

        
        const creation = await DB.create({
            URL : body.url,
            shortURL : shortid,
            visitHistory : []
        })
    }
    else{
        shortid = existingEntry.shortURL 
    }
   

    return res.render('home',{shortid : shortid });


} 

async function URLredirect(req , res){
    let shortid = req.params.shortid;
    const instance = await DB.findOneAndUpdate({shortURL : shortid} , {
        $push : {
            visitHistory :{
                clicksperURL : Date.now(),
            }
        }
    });

    
    let redirectURL = instance.URL;
    let clicksPerUrl = instance.visitHistory.length
    
     res.redirect(redirectURL)
}

async function URLanalytics(req , res){
    let shortid = req.params.shortid;
    let all_info = await DB.findOne({shortURL : shortid});

    return res.status(200).json({
        visitlog : all_info.visitHistory,
        url : all_info.URL,
        clicks : all_info.visitHistory.length
    })
}

async function staticrouteshandlers(req , res) {
    const allurls = await DB.find({});
    return res.render('home' , {urls : allurls} );
}



module.exports = {URLshortner ,URLredirect , URLanalytics , staticrouteshandlers}