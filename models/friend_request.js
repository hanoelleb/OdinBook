var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema(
  {
     sender: {type: Schema.Types.ObjectId, ref: 'User', required: true},
     receiver: {type: Schema.Types.ObjectId, ref: 'User', required: true},
     status: {type: String, enum: ['Pending', 'Reject', 'Accept'], default: 'Pending', required: true}
  }
)

module.exports = mongoose.model('Request', RequestSchema);
