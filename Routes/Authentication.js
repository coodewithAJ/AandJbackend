const express = require("express");
const router = express.Router()
const User = require("../Models/Authentication")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);



// signup 
router.post("/signup",async(req,res)=>{
    
    const hash = bcrypt.hashSync(req.body.password, salt); 
    const newUser = User({...req.body,password:hash});
    try{
         const savedUser = await newUser.save();
         res.send(savedUser);
    }catch(err){
        res.send("error while creating new user "+ err)
    }

})

// signin 

router.post("/signin",async(req,res)=>{
    const newUser = req.body;
  
    
    try{
        const user = await User.findOne({email:newUser.email});
        if(user){
            const isValid = bcrypt.compareSync(req.body.password,user.password);
            if(isValid){
                res.send(user);
            }else{
                res.send("Incorrect Password")
            }
    
        }else{
            res.send("please create account first")
        }

    }catch(err){
        res.send("error while signin user "+ err )
    }
   
})

module.exports = router;