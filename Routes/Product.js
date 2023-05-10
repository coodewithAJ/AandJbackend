const router = require("express").Router();
const Product = require("../Models/Product")




// adding product to our db 
router.post("/create",async(req,res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.send(savedProduct);

    }catch(err){
        res.send("error while creating new product from backend  side "+ err)
    }
})

// getting all the products by category
router.get("/:category",async(req,res)=>{
    
    try{
      
        const products = await Product.find({category:req.params.category})
        res.send(products);

    }catch(err){
        res.send("err while fetching the products from the backend side "+ err)
    }
})
// getting all the products by id
router.get("/:category/:id",async(req,res)=>{
    try{
      
        const product = await Product.findOne({_id:req.params.id})
        res.send(product);

    }catch(err){
        res.send("err while fetching the product by id from the backend side "+ err)
    }
})


module.exports = router;