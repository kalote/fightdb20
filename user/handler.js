const mongoose = require('mongoose'),
      bluebird = require('bluebird'),
      validator = require('validator'),
      User = require('./model/user.js'),
      mongoString = 'mongodb://'+process.env.MONGODB_URL;

mongoose.Promise = bluebird;
const db = mongoose.connect(mongoString).connection;

module.exports = {
  user: (event, context, callback) => {
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.get(db, id, callback);
  },
  createUser: (event, context, callback) => {
    const data = JSON.parse(event.body);

    User.create(db, data, callback);
  },
  deleteUser: (event, context, callback) => {
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.delete(db, id, callback);
  },
  updateUserInfo: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.updateInfo(db, id, data, callback);
  },
  updateUserSocial: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.updateSocial(db, id, data, callback);
  },
  updateUserGroups: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.updateGroups(db, id, data, callback);
  },
  updateUserGames: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.updateGames(db, id, data, callback);
  },
  updateUserPassword: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    User.updatePassword(db, id, data, callback);
  }
}
