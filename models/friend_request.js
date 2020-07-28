var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema(
  {
  }
)

module.exports = mongoose.model('Request', RequestSchema);
