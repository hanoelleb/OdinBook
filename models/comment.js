var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
  }
);

module.exports = mongoose.model('Comment', CommentSchema);
