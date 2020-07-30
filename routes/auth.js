var express = require('express');
var router = express.Router();

var passport = require('passport');

require('../passport');

var UserController = require('../controllers/userController');

router.get('/signin', function(req, res, next) {
    res.render('sign_in', {title: 'Sign in!'});
});

router.post('/signin', UserController.post_signin);

router.get('/signup', function(req, res, next) {
    res.render('sign_up', {title: 'Sign up!'});
});

router.post('/signup', UserController.create_user);

module.exports = router;
