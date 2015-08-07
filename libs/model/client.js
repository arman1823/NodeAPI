var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);
var config = require(libs + 'config');


var thinky = require('thinky')(config.get('rethinkdb'));
var r = thinky.r ;
var type = thinky.type;


var	Client = thinky.createModel("Client",{

		name: type.string().required(),
		clientId: type.string().required(),
		clientSecret: type.string().required()
		
	});

module.exports  = Client;

