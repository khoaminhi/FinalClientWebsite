var express = require('express');
var router = express.Router();

const signupController = require('./signupController')

router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/', signupController.signup);



module.exports = router;