var express = require('express');
var router = express.Router();

router.get('/post/:id', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get post page');
});

router.get('/post/create', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get create post');
});

router.post('/post/create', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post create post');
});

router.get('/post/:id/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get update post');
});

router.post('/post/:id/edit', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post update post');
});

router.get('/post/:id/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete post');
});

router.post('/post/:id/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post delete post');
});

/* Comments */

router.get('/post/:id/comment/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get delete comment');
});

router.post('/post/:id/comment/delete', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post delete comment');
});

router.get('/post/:id/comment/add', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get create comment');
});

router.post('/post/:id/comment/add', function(req, res, next) {
  res.send('NOT IMPLEMENTED: post create comment');
});


