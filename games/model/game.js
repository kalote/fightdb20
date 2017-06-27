const mongoose = require('mongoose');
const GameModel = require('../schema/game.js');

module.exports = {
  get: (db, id, callback) => {
    db.once('open', () => {
      GameModel
      .find({_id: id})
      .then((g) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(g)
        });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
    });
  },

  create: (db, data, callback) => {
    let game = new GameModel({
      title: data.title,
      picture: data.picture,
      characters: data.characters
    });

    db.once('open', () => {
      game
      .save()
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({id: game['_id']})
        });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
    });
  },

  delete: (db, id, callback) => {
    db.once('open', () => {
      GameModel
      .remove({ _id: id })
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify('Ok')
        });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
    });
  },

  update: (db, id, data, callback) => {
    let game = {
      title: data.title,
      picture: data.picture,
      characters: data.characters
    };

    db.once('open', () => {
      GameModel
      .findByIdAndUpdate(id, {$set: game}, {runValidators: true})
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify('Ok')
        });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
    });
  }
}
