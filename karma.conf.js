module.exports = function (config) {
	config.set({
		basePath: './',
		frameworks: ['jasmine'],
		files: getSpecs(),
		browsers: ['PhantomJS'],
		reporters: ['spec'],
		singleRun: true
	});
}

var specs = [
	'specs/**.spec.js'
];

function getSpecs() {
	var argv = require('yargs').argv;
	if (argv.file !== undefined) {
		return [argv.file];
	}
	return specs;
}