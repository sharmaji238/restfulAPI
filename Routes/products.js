const express = require ('express');
const router = express.Router();
const {getAllProducts,getAllProductsTesting}= require("../Controller/products")

router.route("/").get(getAllProducts);

router.get('/testing',getAllProductsTesting)

module.exports = router;