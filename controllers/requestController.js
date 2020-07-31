var async = require('async');

var Request = require('../models/friend_request');
var User = require('../models/user');

exports.send_request = function(req, res, next) {
    var sender = req.user._id;
    var receiver = req.params.id;

    var request = new Request(
      {
        sender: sender,
        receiver: receiver
      }
    );

    request.save( function(err) {
        if (err) return next(err);
	res.redirect('/'+receiver+'/timeline');
    });
}

exports.get_sent = function(req, res, next) {
    Request.find({sender: req.user._id})
	.populate('receiver')
	.populate('sender')
	.exec( function(err, request_list) {
            if (err) return next(err);
            res.render('request_list', { title: 'Sent Requests' ,
                request_list: request_list, isSent: true });
	});
}

exports.get_received = function(req, res, next) {
    Request.find({receiver: req.user._id})
	.populate('sender')
	.populate('receiver')
	.exec(function (err, request_list) {
	    if (err) return next(err);
            res.render('request_list', { title: 'Received Requests', 
                request_list: request_list, isSent: false });
	});
}

exports.cancel_request = function(req, res, next) {
    console.log(req.body.req_id);
    Request.findByIdAndRemove(req.body.req_id)
	.exec( function(err) {
            if (err) return next(err);
            res.redirect('/requests/sent');
	});
}

exports.respond_request = function(req, res, next) {
    console.log(req.body.req_id);
    console.log(req.body.response);

    if (req.body.response === 'Accept') {
        async.parallel({
              remove_request: function(callback) {
                  Request.findByIdAndRemove(req.body.req_id)
                      .exec(callback);
	      },
              addToSender: function(callback) {
                  User.findByIdAndUpdate(req.body.sender,
                      {$addToSet: {friends: req.body.receiver}}, {new: true})
		      .exec(callback);
	      },
              addToReceiver: function(callback) {
                  User.findByIdAndUpdate(req.body.receiver,
                      {$addToSet: {friends: req.body.sender}}, { new: true })
		      .exec(callback);
	      }
	},
	function(err){
            if (err) return next(err);
            res.redirect('/requests/received');
	});
    }
    else {
        Request.findByIdAndRemove(req.body.req_id)
	    .exec(function(err) {
                if (err) return next(err);
		res.redirect('/requests/received');
	    });
    }
}
