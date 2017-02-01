/**
 * A eval version of tst.
 *
 * @module  tst
 */

var extend = require('xtend/mutable');
var Test = require('./lib/test');
var parseStack = require('stacktrace-parser').parse;

window.addEventListener('error', function (e) {
	console.log(e)
})

/**
 * Test registerer.
 * If it is run - that means we should enqueue the test.
 */
function test (name, fn) {
	//throw special error to capture stack with sourcemaps applied
	//Error.captureStackTrace(test); ignores sourcemaps
	xxx


	var test = new Test();

	// console.log(test.stack)

	return test;
};


/**
 * Skip alias
 */
test.skip = function skip (message) {
	return test(message);
};


/**
 * Only alias
 */
test.only = function only (message, fn) {
	//TODO
	// return test(message, fn);
	return test;

}


module.exports = test;