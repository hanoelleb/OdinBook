var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
 {
   user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
   content: {type: String, required: true},
   date: {type: Date, required: true},
   likes: {type: Number},
 }
);

module.exports = mongoose.model('Post', PostSchema);
