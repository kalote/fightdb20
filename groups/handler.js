const mongoose = require('mongoose'),
      bluebird = require('bluebird'),
      validator = require('validator'),
      Group = require('./model/group.js'),
      mongoString = 'mongodb://'+process.env.MONGODB_URL;

mongoose.Promise = bluebird;
const db = mongoose.connect(mongoString).connection;

module.exports = {
  group: (event, context, callback) => {
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    Group.get(db, id, callback);
  },
  createGroup: (event, context, callback) => {
    const data = JSON.parse(event.body);

    Group.create(db, data, callback);
  },
  deleteGroup: (event, context, callback) => {
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    Group.delete(db, id, callback);
  },
  updateGroup: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    Group.update(db, id, data, callback);
  }
}
