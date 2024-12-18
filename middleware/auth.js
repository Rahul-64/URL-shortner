const { getUser } = require('../service/auth')

async function  OnlyLoggedinUser(req , res , next) {
    const sessionid = req.cookies?.uid;
    if(!sessionid) return res.redirect('/login');

    const person = getUser(sessionid);

    if(!person) return res.redirect('/login')
    
    req.person = person
    next()
}


module.exports = {OnlyLoggedinUser}
