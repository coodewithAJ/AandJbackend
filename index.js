const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authentication = require("./Routes/Authentication")
const product = require("./Routes/Product")
const address =  require("./Routes/Address")
const join = require("./Routes/Join")
const cors = require("cors");
const PORT = process.env.PORT || 8000

mongoose.set('strictQuery', false);
dotenv.config();
const app = express();
app.use(cors());


// middlewares 
app.use(express.json())
app.use("/",authentication);
app.use("/product",product);
app.use("/address",address);
app.use("/join",join);

mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT} and connected to database`)
        
    })

})


