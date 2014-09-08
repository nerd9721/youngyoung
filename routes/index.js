
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
