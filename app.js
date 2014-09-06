
/**
 * Module dependencies.
 */

var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
var routes = require('./routes');

var port    =   process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));   // set the static files location /public/img will be /img for users
app.use(morgan('dev'));           // log every request to the console
app.use(bodyParser());            // pull information from html in POST
app.use(methodOverride());    

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

var router = express.Router();

//console.log('router: ', router);


router.use(function(req, res, next){
  console.log('파이프1');
  //console.log(req.method, req.url);
  next();
});

router.use(function(req, res, next){
  console.log('파이프2');
  //console.log(req.method, req.url);
  next();
});

router.param('name', function(req, res, next, name) {
  console.log('doing name validations on ' + name);
  req.name = name;
  //next(); 
});


router.get('/', routes.index);
router.get('/about', routes.about);
router.get('/about/:name', routes.about_param);

app.use('/', router);

app.listen(port);
console.log('young young 3000');


/*
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

*/
