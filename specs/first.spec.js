'use strict';

describe ('a suite of tests', function () {
	dump('This is the first suite of tests');

	it ('should return a message', function () {
		var message = 'Hello JB';
		expect(message).toBe(message);
	});
});