const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  Linea: {
    type: String,
    required: true,
  },
  Codigo: {
    type: String,
    required: true
  },
  Producto:{
    type: String,
    required: true
  },
  Precio: {
    type: Number,
    required: true
  },
  Cantidad: {
    type: Number,
    required: true
  }

},{versionKey: false});

module.exports = mongoose.model('Product', productSchema);