const express = require('express');
const router = express.Router();
const productListInCartController = require('./productListInCartController')

router.use(express.static('public'));
router.get('/', productListInCartController.productListInCart)

module.exports = router;