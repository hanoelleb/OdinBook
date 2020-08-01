var Post = require('../models/post');
var User = require('../models/user');

//TODO: use async to get posts from friends too
exports.get_posts = function(req, res, next) {
    Post.find({user: req.user._id})
	.populate('user')
	.sort({date: 'descending'})
        .exec( function (err, posts){
	    if (err) return next(err);
            res.render('index', {title: 'OdinBook', posts: posts});
	});
}
