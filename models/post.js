var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var PostSchema = new Schema(
 {
   user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
   content: {type: String, required: true},
   date: {type: Date, required: true},
   likes: {type: Number},
   picture: { data: Buffer, contentType: String }
 }
);

PostSchema
  .virtual('url')
  .get( function() {
      return '/post/' + this._id;
  });

PostSchema
  .virtual('formatted_date')
  .get( function() {
      return moment(this.date).format('MMMM Do YYYY');
  });

module.exports = mongoose.model('Post', PostSchema);
