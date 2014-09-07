
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
