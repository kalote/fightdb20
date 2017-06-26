const mongoose = require('mongoose');
const GroupModel = require('../schema/group.js');

module.exports = {
  get: (db, id, callback) => {
    db.once('open', () => {
      GroupModel
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
    let group = new GroupModel({
      name: data.name
    });

    let errs = group.validateSync()
    if (errs) {
      console.log(errs);
      throw Error('Incorrect group data');
    }

    db.once('open', () => {
      group
      .save()
      .then(() => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({id: group['_id']})
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
      GroupModel
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
    let group = {
      name: data.name
    };

    db.once('open', () => {
      GroupModel
      .findByIdAndUpdate(id, {$set: group}, {runValidators: true})
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
