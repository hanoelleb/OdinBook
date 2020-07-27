var express = require('express');
var router = express.Router();

router.get('/received', function(req, res, next) {
  res.render('request_list', {title: 'Received Requests'});
});

router.get('/sent', function(req, res, next) {
  res.render('request_list', {title: 'Sent Requests'});
});

module.exports = router;
