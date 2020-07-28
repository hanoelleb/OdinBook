var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    salted: {type: String, required: true},
    birthday: {type: Date},
    age: {type: Number},
    bio: {type: String},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    requests: [{type: Schema.Types.ObjectId, ref: 'Request'}]
  }
);

module.exports = mongoose.model('User', UserSchema);
