var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: process.env.dbAPIKey });


export default dbx;