var libs = process.cwd() + '/libs/';
	log = require(libs + 'log')(module);
	config = require(libs + 'config');


	thinky = require('thinky')(config.get('rethinkdb'));
	crypto = require('crypto');
	r = thinky.r ;
	type = thinky.type;


	User = thinky.createModel("User" , {
		username: type.string().required(),
		hashedPassword: type.string().required(),
		salt: type.string().required(),
		created: type.date().default(r.now())
	});



User.methods.encryptPassword = function(password) {
	return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    //more secure - return crypto.pbkdf2Sync(password, this.salt, 10000, 512);
};

// User.virtual('userId')
// .get(function () {
// 	return this.id;
// });

// User.virtual('password')
// 	.set(function(password) {
// 		this._plainPassword = password;
// 		this.salt = crypto.randomBytes(32).toString('hex');
// 		        //more secure - this.salt = crypto.randomBytes(128).toString('hex');
// 		        this.hashedPassword = this.encryptPassword(password);
// 		    })
// 	.get(function() { return this._plainPassword; });


User.methods.checkPassword = function(password) {
	return this.encryptPassword(password) === this.hashedPassword;
};

module.exports  = User;