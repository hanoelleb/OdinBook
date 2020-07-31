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

exports.get_post_page = function(req, res, next) {
    var id = req.params.id;

    Post.findById(id)
        .exec( function(err, post) {
            if (err) return next(err);
            res.render('post_page', {post: post});
	});
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
    console.log(id);
    console.log('content: ' + req.body.post);
 
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
