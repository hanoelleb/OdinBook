var express = require('express');
var router = express.Router();

router.get('/recieved', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get recieved requests');
});

router.get('/sent', function(req, res, next) {
  res.send('NOT IMPLEMENTED: get sent requests');
});
