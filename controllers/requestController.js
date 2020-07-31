var Request = require('../models/friend_request');

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
	.exec( function(err, request_list) {
            if (err) return next(err);
            res.render('request_list', { title: 'Sent Requests' ,
                request_list: request_list, isSent: true });
	});
}

exports.get_received = function(req, res, next) {
    Request.find({receiver: req.user._id})
	.populate('sender')
	.exec(function (err, request_list) {
	    if (err) return next(err);
            res.render('request_list', { title: 'Received Requests', 
                request_list: request_list, isSent: false });
	});
}
