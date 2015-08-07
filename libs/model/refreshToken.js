var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);
var config = require(libs + 'config');


var thinky = require('thinky')(config.get('rethinkdb'));
var r = thinky.r ;
var type = thinky.type;



var RefreshToken = thinky.createModel("RefreshToken",{

        userId: type.string().required(),
        clientId: type.string().required(),
        token: type.string().required(),
        created: type.date().default(r.now())
        
    });

module.exports  = RefreshToken;