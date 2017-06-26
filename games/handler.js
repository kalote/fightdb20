const mongoose = require('mongoose'),
      bluebird = require('bluebird'),
      validator = require('validator'),
      Game = require('./model/game.js'),
      mongoString = 'mongodb://'+process.env.MONGODB_URL;

mongoose.Promise = bluebird;
const db = mongoose.connect(mongoString).connection;

module.exports = {
  game: (event, context, callback) => {
    const id = (event.pathParameters.id && validator.isAlphanumeric(id)) ? event.pathParameters.id : '';

    Game.get(db, id, callback);
  },
  createGame: (event, context, callback) => {
    const data = JSON.parse(event.body);

    Game.create(db, data, callback);
  },
  deleteGame: (event, context, callback) => {
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    Game.delete(db, id, callback);
  },
  updateGame: (event, context, callback) => {
    const data = JSON.parse(event.body);
    const id = event.pathParameters.id;
    if (!validator.isAlphanumeric(id))
      throw Error('Incorrect id');

    Game.update(db, id, data, callback);
  }
}
