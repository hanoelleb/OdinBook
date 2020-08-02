var async = require('async');

var Post = require('../models/post');
var User = require('../models/user');

exports.get_posts = function(req, res, next) {
    async.waterfall([
	function(next) { 
          User.findById(req.user._id)
	     .exec(next);
        },
	function(user, next) {
	  //also include own posts
          user.friends.push(req.user._id);
          Post.find({'user' : { $in : user.friends }})
              .populate('user')
              .sort({date: 'descending'})
              .exec(next);
	}
    ], function(err, result) {
        if (err) return next(err);
	res.render('index', {title: 'OdinBook', posts: result});
    });
}
