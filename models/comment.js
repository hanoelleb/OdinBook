var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    likes: {type: Number}
  }
);

module.exports = mongoose.model('Comment', CommentSchema);
