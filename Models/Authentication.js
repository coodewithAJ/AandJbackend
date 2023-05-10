const mongoose = require("mongoose");


const authenticationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    phone:{
        type:Number,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
})

const user = mongoose.model("user",authenticationSchema);
module.exports = user;