const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();

router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { Codigo, Linea, Producto, Precio, Cantidad } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { Codigo, Linea, Producto, Precio, Cantidad  } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
