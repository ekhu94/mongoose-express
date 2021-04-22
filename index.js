const express = require("express");
const app = express();
const path = require("path");

const Product = require("./models/product");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Mongoose connection open"))
  .catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products, title: "Products" });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product, title: product.name });
});
