const db = require('./../../db/models/review.js');

const insertDataToDB = (dbModel, data) => {
  const promises = [];
  for (let i = 0; i < data.length; i += 1) {
    promises.push(db.insertData(dbModel, data[i]));
  }

  return Promise.all(promises);
};

module.exports.insertDataToDB = insertDataToDB;
