var async = require('async');
var bcrypt = require('bcryptjs');
var passport = require('passport');

var User = require('../models/user');

require('../passport');

//TODO: add sanitation for username and password fields
exports.create_user = function(req, res, next) {
    var username = req.body.name;
    var userEmail = req.body.email;
    var password = req.body.password;
 
    bcrypt.hash(password, 10, (err, hashedPassword) => {
       if (err) return next(err);

       const user = new User({ 
           name: username, 
           email: userEmail, 
           salted: hashedPassword
       });

       user.save(function(err) {
           if (err) return next(err);    
	   res.redirect('/');
       });
    })
}

exports.post_signin = passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/signin'
});
