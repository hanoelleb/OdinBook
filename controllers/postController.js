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
	  res.render('post_page', {post: results.post, 
              comments: results.comments});
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
            console.log(JSON.stringify(thepost));
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
		  .exec(callback);
	  },
          comments: function(callback) {
              Comment.find({post: req.params.pid})
		  .populate('post')
		  .exec(callback);
	  }
      }, 
      function(err, results) {
          if (err) return next(err);  
	  res.render('post_page', { post: results.post, 
              comments: results.comments });
      }
    )
}
