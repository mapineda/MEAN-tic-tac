var mongoose = require('mongoose');

//add user schema
var userSchema = new mongoose.Schema({
  name: { type:String, required: true },
  email: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

//make available to other files
module.exports = User;
