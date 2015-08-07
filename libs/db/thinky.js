var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);
var config = require(libs + 'config');



// Initialize thinky
// The most important thing is to initialize the pool of connection
var thinky = require('thinky')(config.get('rethinkdb'));
var r = thinky.r;
var Errors = thinky.Errors;




module.exports = thinky;