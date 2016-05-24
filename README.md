# Running Only One Jasmine Test in Karma

Jasmine is the preferred BDD JavaScript testing framework for our team and Karma is the test runner that we use. It is great for running all of our tests at once and neatly reporting the results. One of my developers asked me if we could easily isolate a partinular suite of unit tests and only run them. He told me it would be great if we could override our gulp task and pass in a command line argument in order to specify a single spec file to test.

In a few minutes, we had modified our gulp task and we are now able to easily isolate a specific test. This repo contains example source code that demonstrates how we accomplished this.

There are certainly Node packages that can be used other than the ones I chose. Naming conventions and folder structures are based on our team's guidelines. There is some deviation, mostly in order to better focus on and demonstrate the solution.

The solution is quite simple and the only thing different than typical Jasmine tests ran with Karma is found in the `karma.conf.js`.

The `karma.conf.js` is as follows:

```
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
```

The gulp task can be run from the command line using `gulp test` or `gulp test --file "specs/first.spec.js"`.