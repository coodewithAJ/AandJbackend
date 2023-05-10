const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    streetaddress:{
        type:"String",
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    city:{
        type:"String",
        required:true
    },
    state:{
        type:"String",
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model("Address",addressSchema);