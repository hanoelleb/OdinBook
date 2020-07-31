var async = require('async');

var User = require('../models/user');

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
