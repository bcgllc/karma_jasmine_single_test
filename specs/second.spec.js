'use strict';

describe ('a second suite of tests', function () {
	dump('This is the second suite of tests');

	it ('should return a message', function () {
		var message = 'Hello JB';
		expect(message).toBe(message);
	});
});