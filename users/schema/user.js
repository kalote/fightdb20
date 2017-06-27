const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      gravatar = require('machinepack-gravatar'),
      password = require('machinepack-passwords');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  gamertag: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  lastLoggedIn: {
    type: Date,
    default: Date.now
  },
  gravatarUrl: {
    type: String
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'playing'],
    default: 'online'
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  twitch: {
    type: String
  },
  games: [],
  groups: []
});

UserSchema.pre('save', function(next) {
  //Encrypt password
  password.encryptPassword({
    password: this.password,
    difficulty: 10,
  }).exec((err, encPwd) => {
    if (err) return next(err);
    this.password = encPwd

    //Get gravatar URL
    gravatar.getImageUrl({
      emailAddress: this.email
    }).exec((err, imgUrl) => {
      if (err) return next(err);
      this.gravatarUrl = imgUrl;
      next();
    });
  });
});

UserSchema.pre('findOneAndUpdate', function(next) {
  if (this.getUpdate().$set.password) {
    //Encrypt password
    password.encryptPassword({
      password: this.getUpdate().$set.password,
      difficulty: 10,
    }).exec((err, encPwd) => {
      if (err) return next(err);
      this.update({}, {$set: {password: encPwd}});
      next();
    });
  }
});

UserSchema.methods.comparePassword = (candidate, cb) => {
  password.checkPassword({
    passwordAttempt: candidate,
    encryptedPassword: this.password
  }).exec({
    error: (err) => {
      return cb(err);
    },

    incorrect: () => {
      return cb({error: 'password is not a match'});
    },

    success: () => {
      cb(null, true);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);
