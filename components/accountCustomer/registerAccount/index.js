const express = require('express');
const router = express.Router();
const registerController = require('./registerController');

router.get('/', function(req, res) {
    res.render('register', { title: 'Đăng ký tài khoản' });
  });
router.post("/", registerController.registerController);
module.exports = router;