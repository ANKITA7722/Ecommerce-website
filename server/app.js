const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Ensure this is at the top to load environment variables

const adminRoute = require("./routes/adminRoute");
const productRoute = require("./routes/productRoute");
const paymentRoute = require("./routes/payment");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in body-parser middleware
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.use("/adminuser", adminRoute);
app.use("/product", productRoute);
app.use("/api/payment", paymentRoute); // Removed redundant trailing slash

// Database Connection
mongoose
  .connect(process.env.DBCON).then(() => {

    console.log("DB Connected.......!");

  })
  .catch((error) => {

    console.error("DB Connection Failed:", error.message);
    
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
