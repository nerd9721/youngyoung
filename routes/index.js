

exports.index = function(req, res){
  res.sendfile('./public/index.html');
};


exports.about = function(req, res){
  console.log('from about 파라미터?');
  res.send('this is a about!');
};


exports.about_param = function(req, res){
  console.log('from about_param 파라미터?', req.params.name);
  res.send('this is a about!');
};
