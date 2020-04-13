const mongoose = require('mongoose');


const VilleSchema = new mongoose.Schema({
  name: {
    type: String,
  }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

const User = mongoose.model('User', UserSchema);




module.exports = User;
