const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
async function connectToMonogDb(url){
    return mongoose.connect(url);
}

module.exports= {
    connectToMonogDb,
}