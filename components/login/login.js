var express = require('express');
const passport = require('../../auth/passport')
var router = express.Router();

router.use(express.static('public'));
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', wrongPassword: req.query.wrongPassword });
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?wrongPassword'
  }),
  function(req, res){
    console.log('passport auth success!!')
    if(req.user){
      res.redirect('/')
    }
    else{
      res.redirect('/login')
    }
  }
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;