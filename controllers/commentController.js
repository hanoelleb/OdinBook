var Comment = require('../models/comment');

exports.create_comment = function(req, res, next) {
    var post_id = req.params.id;

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

exports.post_comment = function(req, res, next) {
    //author is current user
    var id = req.user._id
    //post id
    var pid = req.params.pid;

    var comment = new Comment(
      {
        post: pid,
        author: id,
	content: req.body.comment,
	date: new Date(),
        likes: 0
      }
    );

    comment.save( function(err){
        if (err) return next(err);
	res.redirect('/' + id + '/posts/' + pid);
    });
}
