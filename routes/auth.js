var express = require('express');
var router = express.Router();

var passport = require('passport');

require('../passport');

var UserController = require('../controllers/userController');

router.get('/sign-in', function(req, res, next) {
    res.render('sign_in', {title: 'Sign in!'});
});

router.post('/sign-in', UserController.post_signin);

router.get('/sign-up', function(req, res, next) {
    res.render('sign_up', {title: 'Sign up!'});
});

router.post('/sign-up', UserController.create_user);

router.get('/sign-out', UserController.get_signout);

module.exports = router;
