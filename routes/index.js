
var sys = require("sys");
var fs = require("fs");
var http = require("http");
var util = require('util');
var mkdirp = require('mkdirp');

exports.index = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.sendfile('./public/index.html');
};


exports.upload = function(req, res){
  console.log('18181818');
  res.setHeader('content-type', 'text/html');
  
  res.sendfile('./public/upload.html');
};



exports.upload2 = function(req, res, next){
  res.setHeader('content-type', 'text/html');
  console.log('AAAAAAAAAAAAAAAAAa');
  
  console.log(req.user);
  
  var username = 'kyunghun2';
  console.log(req.body);
  console.log(req.files);
  
  
  // name으로 복사하고 파일이름은 originalname으로 가고
  // 끝나면 name을 삭제해버림
  
  var path = '/home/pp/storage/'+username +'/';
  
  mkdirp(path, function (err) {
      if (err){
        console.error(err);
      }
      else{ 
        console.log('pow!');
        var del_path = './uploads/' + req.files.file.name;
        var source = fs.createReadStream('./uploads/' + req.files.file.name);
        var dest = fs.createWriteStream(path + req.files.file.originalname);
        
        source.pipe(dest);
        source.on('end', function() {
          // upload 파일에 있는 파일 삭제하기
          fs.unlinkSync(del_path);
        
          res.send('hello sex'); 
          });
        
        source.on('error', function(err) {  });
      }
  });
 
  /*
  var path = '/home/pp/storage/'+username +'/';
 
  var del_path = './uploads/' + req.files.file.name;
  var source = fs.createReadStream('./uploads/' + req.files.file.name);
  var dest = fs.createWriteStream(path + req.files.file.name);
  
  
  console.log(source);
  console.log(dest);
  
  source.pipe(dest);
  source.on('end', function() { 
    // upload 파일에 있는 파일 삭제하기
    fs.unlinkSync(del_path);
    res.send('hello sex'); 
    });
  
  source.on('error', function(err) {  });
  
*/
  //res.send('hello sex');
  //res.sendfile('./public/upload.html');
};


exports.get_download = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.sendfile('./public/download.html');
};


exports.download = function(req, res){
  //res.setHeader('content-type', 'text/html');
  
  console.log(req.params.id);
  
  var filename = req.params.id;
  
  var file_path = '/home/pp/workspace/node_app/uploads/' + filename;
  
  console.log(file_path);
 
  res.download(file_path);
  
  
  //res.send('hello sex download');
};


exports.rpm_upload = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.sendfile('./public/rpm_upload.html');
};



exports.play = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.sendfile('./public/play.html');
};


exports.login = function(req, res){
  res.setHeader('content-type', 'text/html');
  
  res.locals.errors = req.flash();
  console.log(res.locals.errors);
  
  // greetting 을 login.html로 보내고싶음 template 처럼

  res.sendfile('./public/login.html');
};

exports.login_post = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.send('hello sex login');
};

exports.logout = function(req, res){
  console.log('logout 처리');
  req.logOut();
  res.redirect("/");
};






