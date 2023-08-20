require("dotenv").config();
const express = require('express')
const app = express();
const port = process.env.PORT || 5001

const connectDB= require("./db/connect")

app.get('/',(req,res)=>{
    res.send("Hi I am Live")
});

app.get('/start',(req,res)=>{
    res.status(200).json({msg: "I am start"})
});

//Middleware to set router
const product_routes= require('./Routes/products')
app.use("/api/products",product_routes)

const start= async ()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, ()=>{
            console.log(`Server is live at Port:${port}`) })        
    }
    catch(error){
        console.log(error)
    }
}

start();