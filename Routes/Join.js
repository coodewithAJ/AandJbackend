const router = require("express").Router();
const join = require("../Models/Join");

router.post("/",async(req,res)=>{
    const joinUser = new join(req.body)
    try{
        const savedUser = await joinUser.save();
        res.send(savedUser);

    }catch(err){
        res.send("error while join notifications from the backend side "+err)
    }
    

});


module.exports = router