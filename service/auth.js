const sessionTouserId = new Map();

function setUser(sessionid , user){
    sessionTouserId.set(sessionid , user)
}

function getUser(sessionid){
    return sessionTouserId.get(sessionid);
}

module.exports = {getUser , setUser}