const router = require("express").Router();
const addressSchema = require("../Models/Address");


router.post("/",async(req,res)=>{
    const newAddress = new addressSchema(req.body)
    try{
        const savedAddress = await newAddress.save();
        res.send(savedAddress)

    }catch(err){
        res.send("error while saving the address from backend "+ err)
    }
});

module.exports = router;