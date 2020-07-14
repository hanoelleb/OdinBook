var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Profile */

router.get('/profile/:id/', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get profile page');
})

router.get('/profile/:id/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get edit profile page');
})

router.post('/profile/:id/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post edit profile page');
})

router.get('/profile/browse/:id/posts/'), function(req, res, next) {
  res.send('NOT IMPLEMENTED: get other user\'s profile page');
})

router.get('/profile/browse/:id/posts/:pid'), function(req, res, next) {
  res.send('NOT IMPLEMENTED: get other user post page');
})

/* Comment */

router.get('/profile/browse/:id/posts/:pid/comment'), 
  function(req, res, next) {
     res.send('NOT IMPLEMENTED: get comment to post');
})

router.post('/profile/browse/:id/posts/:pid/comment'),
  function(req, res, next) {
     res.send('NOT IMPLEMENTED: post comment to post');
})


module.exports = router;
