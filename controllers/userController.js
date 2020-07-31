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

exports.index_users = function(req, res, next) {
    User.find({'_id' : {$ne : req.user._id}})
        .exec( function(err, user_list) {
	    if (err) return next(err);
            res.render('find', {title: 'Find friends!', users: user_list});
	});
}

//TODO also get Posts by user with async, get all posts on timeline
exports.show_user = function(req, res, next) {
    User.findById(req.params.id)
	.exec( function(err, found_user) {
	    if (err) return next(err);
            res.render('other_user', { user: found_user });
	});
}
