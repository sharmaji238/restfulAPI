require("dotenv").config();

const connectDB= require("./connect")
const Product = require("../Models/product")
const ProductJSON= require("../JSON/products.json")
const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);        
        // await Product.deleteMany();
        await Product.create(ProductJSON);

        console.log("Success Products Collection created")
    }
    catch(error){
        console.log(error);
    }    
}

start();