const express = require('express');
const router = express.Router();
const reviewController = require('./apiProductDetailReviewController');

router.post("/addReview", reviewController.addReview);
router.get("/getReview", reviewController.getReview);
module.exports = router;