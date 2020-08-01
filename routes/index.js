var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');
var RequestController = require('../controllers/requestController');
var PostController = require('../controllers/postController');
var CommentController = require('../controllers/commentController');
var ProfileController = require('../controllers/profileController');
var IndexController = require('../controllers/indexController');

//redirect to sign in if not logged in
router.use(function loggedIn(req, res, next) {
    if (!req.user)
        res.redirect('/auth/signin');
    else
        next();
})

/* GET home page. */
router.get('/', IndexController.get_posts);

router.post('/', PostController.add_post);

/* Profile */

router.get('/profile/', ProfileController.get_profile)

router.get('/profile/edit', ProfileController.get_edit)

router.put('/profile/', ProfileController.put_update);

router.delete('/profile/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: delete profile');
});

/* Friends */

router.get('/find', UserController.index_users);

router.get('/friends', UserController.show_friends);

//change to post route
router.delete('/friends/:id/remove', function(req, res, next) {
  res.send('NOT IMPLEMENTED: remove friend');
});

/* Post */

router.get('/post/:id', PostController.get_post_page);

router.get('/post/:id/edit', PostController.get_edit_form);

router.put('/post/:id/', PostController.update_post);

router.delete('/post/:id/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete post');
});

router.delete('/post/:id/comment/:cid', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete comment');
});

router.post('/post/:id/', CommentController.create_comment);

/* Other User */

router.get('/:id/timeline/', UserController.show_user);

//send friend request
router.post('/:id/timeline/', RequestController.send_request);

//like post
router.put('/:id/timeline/', PostController.like_post);

router.get('/:id/posts/:pid', PostController.get_other_user_post);

//like post on page
router.put('/:id/posts/:pid', PostController.like_post);

//to add comment on other user's post
router.post('/:id/posts/:pid', CommentController.post_comment);

router.get('/:id/profile', ProfileController.show_other_profile);

module.exports = router;
