var async = require('async');

var User = require('../models/user');
var Post = require('../models/post');

exports.get_profile = function(req, res, next) {
    Post.find({user: req.user._id})
	.sort({date: 'descending'})
	.exec( function(err, posts) {
            res.render('profile', {title: 'Your profile', user: req.user,
	    posts: posts});
	})
}

exports.get_edit = function( req, res, next) {
    res.render('profile_form', { title: 'Edit Profile', user: req.user });
};

exports.put_update = function( req, res, next) {
    var updatedProfile = new User ({
        name: req.body.name,
	age: req.body.age,
	birthday: req.body.birthday,
	bio: req.body.bio,
	_id: req.user._id
    });

    User.findByIdAndUpdate(req.user._id, updatedProfile, {}, 
	function(err) {
            if (err) return next(err);
            res.redirect('/profile');
        }
    );
};

exports.show_other_profile = function( req, res, next) {
    async.parallel({
        user: function(callback) {
	    User.findById(req.params.id)
		.exec(callback);
	    },
	posts: function(callback) {
            Post.find({user: req.params.id})
		.populate('user')
		.sort({date: 'descending'})
		.exec(callback);
	    } 
    }, function(err, results) {
        if (err) return next(err);
	res.render('other_profile', { user: results.user, 
            posts: results.posts } );
    });
};
