var express = require('express');
var router = express.Router();
const ProductController = require('./productDetailController')
/* GET home page. */
// router.get('/', ProductController.list)
router.use(express.static('public'));
router.get('/:id', ProductController.productDetail);
module.exports = router;