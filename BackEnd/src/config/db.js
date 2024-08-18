const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://utkarshukani:wG2zWr6r9JW8fDwS@cluster0.8fncs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = ()=>{
    return mongoose.connect(mongodbUrl);
}

module.exports = {connectDB}