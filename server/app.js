
const express = require("express");
const app=express();

require('dotenv').config();


app.listen(8000,()=>{
    console.log("server run on 8000 port");
})
