
var sys = require("sys");
var fs = require("fs");
var http = require("http");

exports.index = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.sendfile('./public/index.html');
};


exports.upload = function(req, res){
  console.log('18181818');
  res.setHeader('content-type', 'text/html');
  
  res.sendfile('./public/upload.html');
};


exports.upload2 = function(req, res){
  res.setHeader('content-type', 'text/html');
  res.send('hello sex');
  //res.sendfile('hello sex');
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






