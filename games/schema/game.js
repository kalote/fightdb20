const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      validator = require('validator');

const GameSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  picture: {
    type: String,
    required: true,
    unique: true
  },
  characters: []
});

module.exports = mongoose.model('User', UserSchema);
