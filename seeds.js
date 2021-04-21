const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/farmStand", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Product = require("./models/product");

Product.deleteMany({});

const products = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(products)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
