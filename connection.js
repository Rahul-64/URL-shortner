const mongoose = require('mongoose');

function connections(url){
    return mongoose.connect(url).then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error detected" , err))
}

module.exports = {connections};