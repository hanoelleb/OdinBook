var Post = require('../models/post');

exports.add_post = function(req, res, next) {
    var post = new Post({
        user: req.user._id,
        content: req.body.post,
        date: new Date(),
	likes: 0
    });

    post.save( function(err){
        if (err) return next(err);
	res.redirect('/');
    });
}
