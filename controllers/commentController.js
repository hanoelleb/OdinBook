var Comment = require('../models/comment');

exports.create_comment = function(req, res, next) {
    var post_id = req.params.id;

    console.log('user: ' + req.user._id);

    var comment = new Comment(
      {
	author: req.user._id,
        post: post_id,
        content: req.body.comment,
        date: new Date(),
        likes: 0
      }
    );

    comment.save( function(err) {
        if (err) return next(err);
	res.redirect('/post/' + post_id);
    });
}
