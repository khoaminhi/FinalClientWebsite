const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const expressHandlebarsSections = require("express-handlebars-sections");
const expressHandlebars = require('express-handlebars');
const sessionHandler = require('./middlewares/sessionHandler');
const loggerSession = require('./middlewares/logger');
const passport = require('./auth/passport');

//config router
const indexRouter = require('./components/home/index');
const usersRouter = require('./routes/users');
const productListRouter = require('./components/productList/index');
const productDetailRouter = require('./components/productDetail/index');
const loginRouter = require('./components/login/login')
const shopCartRouter = require('./components/shopCart/productListInCart/index');
const signupRouter = require('./components/signup/signupRouter');
const totalPayCart = require('./api/cart');
const apiRemoveProductCart = require('./components/shopCart/removeProductInCart/index');
const apiUpdateQuantityCart = require('./components/shopCart/updateProductInCart/index');
const apiPaymentInvoice = require('./components/shopCart/paymentInvoice/index');
const apiAddProductCart = require('./components/shopCart/addProduct2Cart/index');


const app = express();

//expressHandlebarsSections(instanceHbs);  // CONFIGURE 'express_handlebars_sections'
    
// view engine setup
const hbs = expressHandlebars.create({
  //section: expressHandlebarsSections(),
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: __dirname + "/views",
  partialsDir: __dirname + "/views",
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
});

app.engine("hbs", hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//set cookie, 10 year
app.use(session({ 
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 365 * 10},
  secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(sessionHandler);
app.use(loggerSession);

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
app.use('/totalPayCart', totalPayCart);
app.use('/apiRemoveProductCart', apiRemoveProductCart);
app.use('/apiUpdateQuantityCart', apiUpdateQuantityCart);
app.use('/apiPaymentInvoice', apiPaymentInvoice);
app.use('/apiAddProductCart', apiAddProductCart);


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
