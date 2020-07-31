var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');
var RequestController = require('../controllers/requestController');

router.get('/received', RequestController.get_received);

router.get('/sent', RequestController.get_sent);

//accept or reject request
router.post('/received', RequestController.respond_request);

//cancelling request
router.post('/sent', RequestController.cancel_request);

module.exports = router;
