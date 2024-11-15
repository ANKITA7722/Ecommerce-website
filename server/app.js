
const express = require("express");
const app=express();
const mongoose=require("mongoose");
const adminRoute=require("./routes/adminRoute");

require('dotenv').config();

app.use("/adminuser", adminRoute);

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connection !!");
})
app.listen(8000,()=>{
    console.log("server run on 8000 port");
})
