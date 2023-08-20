const mongoose = require('mongoose')


const connectDB =(URI)=>{
    console.log("connected to MongoDB"); 
    mongoose.connect(URI,{ useNewUrlParser: true , useUnifiedTopology: true, });
}

module.exports= connectDB;