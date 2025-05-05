const authUserController = require("../controllers/userController/authuser.controller");
const productController= require("../controllers/productController/product.controller");
const express = require('express');
const router = express.Router();
router.use('/api/authuser',authUserController);
router.use('/api/product',productController);
module.exports = router;
