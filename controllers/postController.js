var async = require('async');

var Post = require('../models/post');
var Comment = require('../models/comment');

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

exports.get_post_page = function(req, res, next) {
    var id = req.params.id;

    async.parallel(
      {
          post: function(callback) {
              Post.findById(id)
		  .populate('user')
		  .exec(callback);
	  },
          comments: function(callback) {
              Comment.find({post: id})
		  .populate('post')
		  .exec(callback);
	  }
      },
      function(err, results) {
          if (err) return next(err);
	  res.render('post_page', {other: false, post: results.post, 
              comments: results.comments, user: req.user});
      }
    )
}

exports.get_edit_form = function(req, res, next) {
    var id = req.params.id;

    Post.findById(id)
	.exec( function(err, post) {
	    res.render('post_edit', {title: 'Edit post', post: post});
	});
}

exports.update_post = function(req, res, next) {
    var id = req.params.id;
 
    var post = new Post(
      {
        _id: id,
	content: req.body.post
      }
    );

    Post.findByIdAndUpdate(id, post, {}, 
        function(err, thepost) {
	    if (err) return next(err);
            res.redirect( thepost.url );
	}
    )
}

exports.get_other_user_post = function(req, res, next) {
    async.parallel(
      {
          post: function(callback) {
              Post.findById(req.params.pid)
		  .populate('user')
		  .exec(callback);
	  },
          comments: function(callback) {
              Comment.find({post: req.params.pid})
		  .populate('post')
		  .populate('author')
		  .exec(callback);
	  }
      }, 
      function(err, results) {
          if (err) return next(err);

	  res.render('post_page', { other: true, post: results.post, 
              comments: results.comments, user: req.user });
      }
    )
}

exports.like_post = function(req, res, next) {
    var post_id = req.body.post_id;
    var current = req.params.id;
    Post.findByIdAndUpdate(post_id, {$inc : { likes : 1 }}, 
	 { new: true}, function(err) {
             if (err) return next(err);
             if (req.params.id.toString() === req.user.id.toString())
                 res.redirect('/');
             else
                 res.redirect('/' + current + '/timeline');
	 }
    )
}
