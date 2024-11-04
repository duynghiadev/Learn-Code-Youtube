require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7070;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Model
const Product = require("./product");

// connect mongodb
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 20000,
    socketTimeoutMS: 45000,
  },
  () => {
    console.log("Product Connected to MongoDB");
  }
);

app.use(express.json());

// listen app
app.listen(PORT, () => {
  console.log(`Product service running at http://localhost:${PORT}`);
});
