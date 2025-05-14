const products = require("../../../services/productService/product.service");
const express= require ('express');
const router = express.Router();

// Create a new Product
router.post("/", products.create);

// Retrieve all Products
router.get("/", products.findAll);

router.get("/dummy", products.dummy);

// Retrieve all published Products
router.get("/published", products.findAllPublished);

// Retrieve a single Product with id
router.get("/:id", products.findOne);

// Update a Product with id
router.put("/:id", products.update);

// Delete a Product with id
router.delete("/:id", products.delete);

// Delete all Products
router.delete("/", products.deleteAll);

module.exports = router;
