var karma = require('karma');

module.exports = function(gulp) {
	return function () {
		var config = {
			configFile: process.cwd() + '/karma.conf.js'
		};
		var server = new karma.Server(config, function () {
			console.log('Finished running tests');
		});
		server.start();
	}
}