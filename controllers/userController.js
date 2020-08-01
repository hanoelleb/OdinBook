var async = require('async');
var bcrypt = require('bcryptjs');
var passport = require('passport');

var User = require('../models/user');
var Post = require('../models/post');

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
//if id is req user or id is in friends list ($in query)
exports.show_user = function(req, res, next) {
    async.parallel(
      { 
	user: function(callback) {
	    User.findById(req.params.id)
                .exec(callback);
        },
	posts: function(callback) {
            Post.find({user: req.params.id})
		.populate('user')
		.exec(callback);
	},
	isFriends: function(callback) {
            User.find({_id: req.params.id, friends: req.user._id})
		.exec(callback);
	}
      }, 
	function(err, results) {
            if (err) return next(err);
	    res.render('other_user', { user: results.user, 
	        posts: results.posts, isFriends: results.isFriends });
        }
    )
}

exports.show_friends = function(req, res, next) {
    User.findById(req.user._id)
	.populate('friends')
	.exec(function (err, user) {
	    if (err) return next(err);
            console.log(user.friends[0].name);
            res.render('friend_list', {title: 'Your friends', 
		friend_list: user.friends} );
	});
}
