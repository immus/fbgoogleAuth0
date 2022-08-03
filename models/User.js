const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fbauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

var userSchema = mongoose.Schema({
    uid: String,
    token: String,
    email: String,
    name: String,
    gender: String,
    pic: String    
});

module.exports = mongoose.model('User', userSchema);