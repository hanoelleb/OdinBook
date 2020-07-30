var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require('bcryptjs');

var User = require('./models/user');

passport.use( new LocalStrategy (
    function(username, password, done) {
        User.findOne({name: username}, function(err, user) {
	    if (err) return done(err);

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            bcrypt.compare( password, user.salted, (err, res) => {
	        if (res) { 
                    return done(null, user);
		}
                else {
		    return done(null, false, 
                        { message: 'Incorrect password.' });
		}
	    });
       });
    }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
