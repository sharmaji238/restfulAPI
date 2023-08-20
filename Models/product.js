const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    name :{type: String,
           required: [true, "Name can't be blank"]},

    price: {type: Number,
            required: true},

    featured: {type: Boolean,
            default:false},
            
    rating: {type: Boolean,
        default:false} ,

    createdAt:{type: Date,
        default: Date.now()},

    company:{type: String,
    enum:{
        values:["Apple","Samsung","Redmi"],
        message: `{VALUE} isn't supported`,}
    }

});

module.exports = mongoose.model("Product",productSchema)