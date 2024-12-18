const {v4 : uuidv4} = require('uuid')
const user = require('../model/user')
const {setUser} = require('../service/auth')


async function userSignup(req , res){
    let body = req.body;
    // console.log(body)
    await user.create({
        name : body.name,
        email : body.email,
        password : body.password
    })

    
    res.render('home')
}

async function userLogin(req ,res) {
    const {name , password} = req.body

    let person = await user.findOne({ name , password})

    if(!person){
        
        return res.render('login' ,{
            err : "No User found with this username and password"
        })
    }

    //session idd creating
    const sessionid = uuidv4();
    setUser(sessionid , person)
    res.cookie('uid' ,sessionid )
    res.render('home')
    

}


module.exports = { userSignup , userLogin}