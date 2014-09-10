
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var multer         = require('multer');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

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
app.use(multer({ dest: './uploads/' }));


// 인증 관련
app.use( cookieParser() );
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

function isLoggedIn(req, res, next) {
  
  console.log('인증 되었는지 확인하는 함수 불림');

  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}


var router = express.Router();

router.use(function(req, res, next){
  //console.log('파이프1');
  console.log(req.user);
  next();
});


router.get('/', routes.index);
router.get('/upload', routes.upload);

router.post('/upload2', routes.upload2);

router.get('/get_download', routes.get_download);
router.get('/download/:id', routes.download);

router.get('/rpm_upload', isLoggedIn, routes.rpm_upload);

router.get('/play', isLoggedIn, routes.play);

router.get('/login', routes.login);
//router.post('/login', routes.login_post);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/rpm_upload');
 } );


//router.post('/login', routes.login_post),

    
    
app.use('/', router);

app.listen(port);
console.log('jaji 3000');

