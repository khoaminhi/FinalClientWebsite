var express = require('express');
var router = express.Router();
const ProductController = require('./productDetailController')
/* GET home page. */
// router.get('/', ProductController.list)
router.use(express.static('public'));
router.get('/:id', ProductController.productDetail);
router.get('/comments/get', ProductController.productComment);
router.post('/addcomment', ProductController.addComment);
module.exports = router;