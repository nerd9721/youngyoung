// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
//var User          = require('../app/models/user');


var user_container = [ {'kyunghun': '1234'},  {'john': '1234'} ];

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
     /*
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    */
 
    
  
  
  var user_container = [ {'kyunghun': '1234'}, {'john': '1234'} ];
  
  function check_auth_user(username, password){
    console.log('자지다 씨발아');
    for(user in user_container){
      if(user[username]){
        
        if(user[username] == pasword)
          return user;
        else
          return -2;
      }
    }
    
    return -1;
  }
  
  //----------------------------------------------------------------------------------
  
  
  var User = function(id, pw){
    this.id = id;
    this.pw= pw;
  };
  
  passport.serializeUser(function(user, done) {
    //done(null, (user.id).toString());
    done(null, user);
  });

  //passport.deserializeUser(function(id, done) {
  passport.deserializeUser(function(user, done) {
    //done(null, id.toString());
    done(null, user);
  });
  
  passport.use('local', new LocalStrategy(
      
      function(username, password, done) {
        console.log('19818181881');
        
          done(null, {id:0 , username: username});
      
        }
        
        /*
        var rtn = check_auth_user(username, password);
        
        
        if(rtn == -1){
          return done(null, false, { message: 'Incorrect username.' });
        }
        else if(rtn == -2){
          return done(null, false, { message: 'Incorrect password.' });
        }
        else{
          return done(null, user);
        }
        */
    ));
  
  
  //----------------------------------------------------------------------------------
  
  
    /*
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

   
          User.findOne({ 'local.email' :  email }, function(err, user) {
              // if there are any errors, return the error
              if (err)
                  return done(err);
  
              // check to see if theres already a user with that email
              if (user) {
                  return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
              } else {
  
          // if there is no user with that email
                  // create the user
                  var newUser            = new User();
  
                  // set the user's local credentials
                  newUser.local.email    = email;
                  newUser.local.password = newUser.generateHash(password);
  
          // save the user
                  newUser.save(function(err) {
                      if (err)
                          throw err;
                      return done(null, newUser);
                  });
              }
  
          });    

        });

    }));
    */

};
