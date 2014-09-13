
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var multer         = require('multer');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var app            = express();
var routes = require('./routes');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

var port    =   process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());
//app.use(multer({ dest: './uploads/'}));

app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    //return filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
    return  filename + '_' + Date.now();
  }}));


app.use(flash());
// 인증 관련
app.use( cookieParser() );
//app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret


var options = {
    host: 'localhost',
    port: 6379,
    db: 2,
};
app.use(session({
    store: new RedisStore(options),
    secret: 'ilovescotchscotchyscotchscotch cat'
}));
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

function isLoggedIn(req, res, next) {
  
  console.log('인증 되었는지 확인하는 함수 불림');

  if (req.isAuthenticated())
    return next();

  //console.log('@@@@@@@@@@@@@');
  //console.log(req.session);
  //console.log(req.user);
  // if they aren't redirect them to the home page
  res.redirect('/login');
}


var router = express.Router();

router.use(function(req, res, next){
  //console.log('파이프1');
  //console.log(req.session);
  next();
});


router.get('/', routes.index);
router.get('/upload', routes.upload);

router.post('/upload2', routes.upload2);

router.get('/get_download', routes.get_download);
router.get('/download/:id', routes.download);


router.get('/rpm_upload', isLoggedIn, routes.rpm_upload);
//router.get('/rpm_upload', routes.rpm_upload);

router.get('/play', isLoggedIn, routes.play);

router.get('/login', routes.login);
//router.post('/login', routes.login_post);

//router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
router.post('/login', passport.authenticate('local', {  failureRedirect: '/login',
                                                        failureFlash: true, //failureFlash: 'Invalid username or password.'
                                                         }),
    function(req, res) {
      res.redirect('/rpm_upload');
 } );



//router.post('/login', routes.login_post),

router.get('/logout', isLoggedIn, routes.logout);

app.use('/', router);

app.listen(port);
console.log('jaji 3000');

