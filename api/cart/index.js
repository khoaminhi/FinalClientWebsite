const express = require('express');
const router = express.Router();
const apiCartController = require('./apiCartController');

router.post("/totalpay", apiCartController.caculateTotalPayCart);
router.get("/totalpay", apiCartController.caculateTotalPayCart);
module.exports = router;