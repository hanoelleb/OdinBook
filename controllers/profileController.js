var async = require('async');
var fs = require('fs');

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

exports.photo_form = function(req, res, next) {
    res.render('photo_form', {title: 'Profile Picture'});
};

exports.set_photo = function(req, res, next) {
    var user_id = req.user._id;

    if (req.file != null) {
	var user = new User({
	    _id: user_id,
	});

	user.avatar.data = fs.readFileSync(req.file.path);
	user.avatar.contentType = 'image/png';
        console.log('set image');

        User.findByIdAndUpdate(user_id, user, {}, 
	    function(err){
                if (err) return next(err);
		res.redirect('/profile');
	    });
    } else {
        console.log('no file uploaded');
	res.render('photo_form', {title: 'Profile Picture'});
    }
};

exports.get_photo = function(req, res, next) {
    User.findById(req.user._id)
	.exec( function(err, user) {
            if (err) return next(err);
            res.contentType(user.avatar.contentType);
	    res.send(user.avatar.data);
	})
}

exports.show_other_photo = function(req, res, next) {
    User.findById(req.params.id)
        .exec( function(err, user) {
            if (err) return next(err);
            res.contentType(user.avatar.contentType);
            res.send(user.avatar.data);
        })
}
