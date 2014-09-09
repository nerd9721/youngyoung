
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var multer         = require('multer');

var app            = express();
var routes = require('./routes');


var port    =   process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

app.use(multer({ dest: './uploads/' }));


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

var router = express.Router();

router.use(function(req, res, next){
  console.log('파이프1');
  next();
});




router.get('/', routes.index);
router.get('/upload', routes.upload);

router.post('/upload2', routes.upload2);

router.get('/get_download', routes.get_download);
router.get('/download/:id', routes.download);

router.get('/rpm_upload', routes.rpm_upload);

router.get('/play', routes.play);

router.get('/login', routes.login);
router.post('/login', routes.login_post);

app.use('/', router);

app.listen(port);
console.log('jaji 3000');

