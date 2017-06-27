const mongoose = require('mongoose');
const UserModel = require('../schema/user.js');

module.exports = {
  get: (db, id, callback) => {
    db.once('open', () => {
      UserModel
      .find({ _id: id })
      .then((u) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(u)
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
    let user = new UserModel({
      name: data.name,
      gamertag: data.gamertag,
      email: data.email,
      password: data.password,
      gender: data.gender,
      facebook: data.facebook,
      twitter: data.twitter,
      twitch: data.twitch
    });

    db.once('open', () => {
      user
      .save()
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({id: user['_id']})
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
      UserModel
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

  updateInfo: (db, id, data, callback) => {
    let user = {
      name: data.name,
      gamertag: data.gamertag,
      email: data.email,
      gender: data.gender,
      status: data.status
    };

    updateFn(db, id, user, callback);
  },

  updateSocial: (db, id, data, callback) => {
    let user = {
      facebook: data.facebook,
      twitter: data.twitter,
      twitch: data.twitch
    };

    updateFn(db, id, user, callback);
  },

  updateGroups: (db, id, data, callback) => {
    let user = {
      groups: data.groups
    };

    updateFn(db, id, user, callback);
  },

  updateGames: (db, id, data, callback) => {
    let user = {
      games: data.games
    };

    updateFn(db, id, user, callback);
  },

  updatePassword: (db, id, data, callback) => {
    let user = {
      password: data.password
    };

    updateFn(db, id, user, callback);
  }
}

function updateFn(db, id, user, callback) {
  db.once('open', () => {
    UserModel
    .findByIdAndUpdate(id, {$set: user}, {runValidators: true})
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
