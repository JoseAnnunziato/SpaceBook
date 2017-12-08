var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/spacebook';
if(process.env.MLAB_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += 'ds139949.mlab.com:39949/heroku_0tl59x6b';
}
var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
