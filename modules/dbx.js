var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: process.env.dbAPIKey });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
module.exports = dbx;