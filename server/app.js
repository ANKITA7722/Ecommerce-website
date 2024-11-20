
const express = require("express");
const app=express();
const mongoose=require("mongoose");
const adminRoute=require("./routes/adminRoute");
const cors = require("cors");
const bodyparser = require('body-parser')
const cloudinary = require('cloudinary').v2;
const PORT=process.env.PORT || 8000

require('dotenv').config();



// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


cloudinary.uploader.upload('path_to_your_image.jpg', function(error, result) {
    if (error) {
      console.error('Upload Error:', error);
    } else {
      console.log('Upload Result:', result);
    }
  });


app.use(cors());

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/adminuser", adminRoute);

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected.......!");
})
app.listen(PORT,()=>{
    console.log(`server run on ${PORT}`);
})
