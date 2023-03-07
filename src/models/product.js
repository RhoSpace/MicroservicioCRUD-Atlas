const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Linea: {
    type: String,
    required: true,
  },
  Codigo: {
    type: Number,
    required: true
  },
  Tp: {
    type: String,
    required: true
  }
},{versionKey: false});

module.exports = mongoose.model('Product', productSchema);