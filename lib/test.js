/**
 * Test case class
 * @module  tst/lib/test
 */

var inherits = require('inherits');
var Emitter = require('events');
var extend = require('xtend/mutable');


/**
 * @constructor
 */
function Test () {

};

inherits(Test, Emitter);

/**
 * Prototype props
 *
 * @True {[type]}
 */
extend(Test.prototype, {
    id: 0,
    name: 'Undefined test',

    //pending, success, error, group
    status: null,

    //test function
    fn: null,

    //nested tests
    children: [],

    //whether test should be resolved
    async: undefined,

    //whether the test is last child within the group
    last: false,

    //timeout for the async
    _timeout: 2000,

    //whether the test is the only to run (launched via .only method)
    only: false
});

/**
 * Bind promise-like
 */
Test.prototype.then = function (resolve, reject) {
    this.once('success', resolve);
    this.once('error', reject);
    return this;
};

/**
 * Mocha-compat timeout setter
 */
Test.prototype.timeout = function (value) {
    if (value == null) return this._timeout;
    if (value === false) this._timeout = test.MAX_TIMEOUT;
    else if (value === Infinity) this._timeout = test.MAX_TIMEOUT;
    else this._timeout = value;
    return this;
};


module.exports = Test;