var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var CommentSchema = new Schema(
  {
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    likes: {type: Number}
  }
);

CommentSchema
  .virtual('formatted_date')
  .get(function() {
      return moment(this.date).format('MMMM Do YYYY');
  });

module.exports = mongoose.model('Comment', CommentSchema);
