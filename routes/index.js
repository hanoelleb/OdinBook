var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Profile */

router.get('/profile/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get profile page');
})

router.get('/profile/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get edit profile page');
})

router.put('/profile/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post edit profile page');
});

router.delete('/profile/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: delete profile');
});

router.get('/profile/friends', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get friends');
});

router.delete('/profile/friends/:id/remove', function(req, res, next) {
  res.send('NOT IMPLEMENTED: remove friend');
});


/* Post */

router.get('/post/:id', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get post page');
});

router.get('/post/new', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get create post');
});

router.put('/post/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post create post');
});

router.get('/post/:id/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get update post');
});

router.put('/post/:id/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post update post');
});

router.delete('/post/:id/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete post');
});

router.delete('/post/:id/comment/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete comment');
});

router.get('/post/:id/comment/new', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get create comment');
});

router.put('/post/:id/comment/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post create comment');
});

/* Other User */

router.get('/:id/posts/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get other user\'s profile page');
})

router.get('/:id/posts/:pid', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get other user post page');
})

/* Comment */

router.get('/:id/posts/:pid/comment/new', 
  function(req, res, next) {
     res.send('NOT IMPLEMENTED: get comment to post');
})

router.post('/:id/posts/:pid/comment',
  function(req, res, next) {
     res.send('NOT IMPLEMENTED: post comment to post');
})

module.exports = router;
