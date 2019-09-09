const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');
const Proejct = require('../models/Project');
const Part = require('../models/Part');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = async (config) => {
  var conncted = false;
  for (var i=0; i<5; i++) {
    try {
      await mongoose.connect(config.dbPath,{
        useNewUrlParser: true
      });
      conncted = true;  
      break;
    } catch {

    }
    await sleep(2000);
  }
  
  if (conncted) {

  
  const db = mongoose.connection;
  db.once('open', err => {
    if (err) {
      throw err;
    }
    User.seedAdminUser().then(() => {
      Proejct.seedProjects();
      Part.seedParts();
      console.log('Database ready');
    }).catch((reason) => {
      console.log('Something went wrong');
      console.log(reason);
    });
  });
  db.on('error', reason => {
    console.log(reason);
  });
  } else {
    throw "Faled to connect to db!"
  }
};