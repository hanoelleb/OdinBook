var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');
var RequestController = require('../controllers/requestController');
var PostController = require('../controllers/postController');
var CommentController = require('../controllers/commentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OdinBook' });
});

/* Profile */

router.get('/profile/', function(req, res, next) {
  res.render('profile', {title: 'Your profile'});
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

/* Friends */

router.get('/friends', function(req, res, next) {
  res.render('friends_list', {title: 'Your friends'});
});

router.delete('/friends/:id/remove', function(req, res, next) {
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

router.get('/:id/profile', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get other user profile');
});

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
