
const express = require("express");
const app=express();
const mongoose=require("mongoose");
const adminRoute=require("./routes/adminRoute");
const cors = require("cors");
const bodyparser = require('body-parser')
const PORT=process.env.PORT || 8000

require('dotenv').config();

app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/adminuser", adminRoute);

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connection !!");
})
app.listen(PORT,()=>{
    console.log(`server run on ${PORT}`);
})
