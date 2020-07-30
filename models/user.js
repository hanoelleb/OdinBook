var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

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

UserSchema
    .virtual('formatted_birthday')
    .get( function() {
        return moment(this.birthday).format('YYYY-MM-DD');
    });

module.exports = mongoose.model('User', UserSchema);
