const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String
    },
    color:{
        type:Array
    },
    img:{
        type:Array,
        required:true

    },
    size:{
        type:Array
    },
    category:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    mrp:{
        type:Number
    },
    discount:{
        type:Number
    },

},{timestamps:true})

module.exports = mongoose.model("product",productSchema);