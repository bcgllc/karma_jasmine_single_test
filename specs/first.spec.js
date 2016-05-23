'use strict';

describe ('a suite of tests', function () {
	it ('should return a message', function () {
		dump('This is the first test');
		var message = 'Hello JB';
		expect(message).toBe(message);
	});
});