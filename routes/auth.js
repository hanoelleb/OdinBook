var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');

router.get('/signin', function(req, res, next) {
    res.render('sign_in', {title: 'Sign in!'});
});

router.post('/signin', function(req, res, next) {
    res.send('NOT IMPLEMENTED: post sign in');
});

router.get('/signup', function(req, res, next) {
    res.render('sign_up', {title: 'Sign up!'});
});

router.post('/signup', function(req, res, next) {
    res.send('NOT IMPLEMENTED: post sign up');
});

module.exports = router;
