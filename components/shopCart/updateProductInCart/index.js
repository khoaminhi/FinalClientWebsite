const express = require('express');
const router = express.Router();
const apiUpdateQuantityInCartController = require('./apiupdateQuantityCartController');

router.put("/updateQuantityInCart", apiUpdateQuantityInCartController.updateQuantityInCart);
module.exports = router;