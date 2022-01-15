const express = require('express');
const router = express.Router();
const apiRmPrInCartController = require('./apiRemoveProductInCartController');

router.post("/removeProductInCart", apiRmPrInCartController.removecartItem);
module.exports = router;