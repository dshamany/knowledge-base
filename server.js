var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
let session = require('express-session');
let passport = require('passport');
let methodOverride = require('method-override');

require('dotenv').config();
require('./config/database');
require('./config/passport');


var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var publicationsRouter = require('./routes/publications');
var sleepRouter = require('./routes/sleep');
var journalRouter = require('./routes/journals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'SEIProject2',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/publications', publicationsRouter);
app.use('/sleep', sleepRouter);
app.use('/journals', journalRouter);


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
