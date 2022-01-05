const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session")


const indexRouter = require('./components/home/index');
const usersRouter = require('./routes/users');
const productListRouter = require('./components/productList/index');
const productDetailRouter = require('./components/productDetail/index');
const loginRouter = require('./components/login/login')
const shopCartRouter = require('./components/shopCart/shopCart');
const signupRouter = require('./components/signup/signupRouter');



const app = express();
const passport = require('./auth/passport')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.user = req.user
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productList', productListRouter);
app.use('/productDetail', productDetailRouter);
app.use('/shopCart', shopCartRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
