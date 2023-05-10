const mongoose = require("mongoose");
const joinSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("join",joinSchema);