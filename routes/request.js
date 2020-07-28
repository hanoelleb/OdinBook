var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');
var RequestController = require('../controllers/requestController');

router.get('/received', function(req, res, next) {
  res.render('request_list', {title: 'Received Requests'});
});

router.get('/sent', function(req, res, next) {
  res.render('request_list', {title: 'Sent Requests'});
});

module.exports = router;
