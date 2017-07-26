var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
//var flash = require('connect-flash');
//var routes = require('./routes');

//var ejs = require('ejs');//引入ejs

var index = require('./routes/index');

//var register = require('./routes/registerRoute');

var app = express();

// view engine setup 这两句是使用jade模板
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

//这两句是使用html模板
/*app.set('views', path.join(__dirname, 'dist'));
app.engine("html",ejs.__express);//设置html模板
app.set("view engine", "html");//设置视图引擎*/
/*app.engine("html",ejs.__express);
app.set('views', path.join(__dirname, 'dist'));// 设置存放模板文件的目录
app.set('view engine', 'html');// 设置模板引擎为 html*/

//更改服务监听的 端口号
/*process.env.PORT = 8888;
app.set('port', process.env.PORT);*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));//添加一个中间件,设置静态资源路径为public
app.use(express.static(path.join(__dirname, 'dist')));

//routes(app);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
