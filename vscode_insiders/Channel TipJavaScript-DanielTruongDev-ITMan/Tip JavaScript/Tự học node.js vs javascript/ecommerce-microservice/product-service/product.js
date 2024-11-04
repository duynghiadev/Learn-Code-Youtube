const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  create_at: {
    type: Date,
    default: Date.now, // Set default to the current date
  },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
