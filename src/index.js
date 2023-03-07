const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const productRoute = require("./routes/product");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors(
  // origin = "https://rhospace.github.io/erickPollos"
  // origin = "http://www.rhospace.com/erickPollos",
  // origin = "https://www.rhospace.com"
));
app.use("/api", productRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
