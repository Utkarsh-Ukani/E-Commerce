const mongoose = require("mongoose")

const mongodbUrl = process.env.MONGODB_URI
// mongoose.set('debug', true);
const connectDB = ()=>{
    return mongoose.connect(mongodbUrl);
}

module.exports = {connectDB}