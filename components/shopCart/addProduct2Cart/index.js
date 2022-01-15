var express = require('express');
var router = express.Router();
const addProductCartController = require('./addProduct2CartController');


router.post('/add', addProductCartController.addProductCartController)
module.exports = router;