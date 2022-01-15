var express = require('express');
var router = express.Router();
const ProductController = require('./productListController')
router.use(express.static('public'));
router.get('/', ProductController.productList)
// router.get('/:id', ProductController.productByCategories)
module.exports = router;