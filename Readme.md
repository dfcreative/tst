> _TST_ is a code scaffolding and test running tool with [mocha](http://npmjs.org/package/mocha)/[tap](http://npmjs.org/package/tap)-compatible API.


## Motivation

Natural process of developing a module, behind writing the tests, includes debugging,, benchmarking, researching, reasoning, experimenting, running in different environments, documenting and essentially - writing a code. These processes are inseparable and fugitive, and require easy and intuitive tools to keep developer focused on the important.

There is a plenty of industrial-quality test runners, like mocha, ava, tap, karma and others. They provide rich API, but they are targeted to TDD in industrial sense of word, which usually means serious things: installing, configuring, learning API, knowing terminology, designing testing architecture etc. All that is basically an overcomplication of simple things, and instead of keeping dev focused, that distracts from importsnt. Oftentimes one can find herself spending time on setting up a tool instead of writing a code.

_TST_ is a tool for devs tired of testing or tooling, which essentially just scaffolds code and runs it, providing beautiful output and having almost no API.


## Tests

_tst_ can be used as a classical test runner, like mocha.

```js
var test = require('tst');

test.skip('First test', function () {

});

test.only('Exclusive test', function () {

});

test('Async test', function (done) {
	this.timeout = Infinity; //turn off timeout

	longCall(done);
});
```

Output in node:

[insert link]

Output in browser:

[insert screenshot]


## Benchmarks

_tst_ provides a way to measure performance of cases, including total time, ops/s, ranking.

```js
test('Outer arguments vs inner arguments', function () {
	test('Outer arguments', function () {

	});

	test('Inner arguments', function () {

	});
});
```

Output in node:

[insert link]

Output in browser:

[insert screenshot]


## Research

_tst_ is also useful for making code research/pondering on various code solutions.

```js
test('# Callbacks or params?', function () {
	test('## Callbacks', function () {

	});

	test('## Params', function () {

	});
});

test(`# Should we use FFT in shaders or in JS?

	Results:
	`, function () {

	});
```

Output in node:

[insert link]

Output in browser:

[insert screenshot]

It recognizes markdown in titles and strips the test description from the output (same as git in commits). You can write a description text in pure markdown, it will be parsed and inserted with styles applied.


## Notes, ideas, experiments, documentation

TST also recognizes text tokens for styling tests:

```js
test('Numerated lists', function () {
	test('1. First case', function () {

	});
	test('1. Second case', function () {

	});
});

test('Unnumerated lists', function () {
	test('* First case', function () {

	});
	test('* Second case', function () {

	});
});

test('Reasoning', function () {
	test('+ Argument for', function () {
		test('- Counter-argument', function () {

		});
	})
	.test('- Argument against')
	.test('v Accept')
	.test('x Deny')
	.test('~ Not sure')
	.test('! Note')
	.test('= Compromise')
	.test('? Question')
});

test('Checkboxes', function () {
	test('[ ] Write tests', function () {

	});
	test('[x] Make it work', function () {

	});
	test('[ ] Refactor', function () {

	});
	test('[ ] Optimise', function () {

	});
	test('[ ] Show the world', function () {

	});
	test('[v] Suffer from no attention', function () {

	});
});
```

## API

TST also provides some additional API functions (for advanced use).

```js
test()
.before(fn)
.after(fn)
.then(success, fail)
.on(evt, cb)
.skip()
.only()
.test()
```


In all that, _tst_ is an indispensible tool for your projects, which can replace tests, benchmarking, docs and even readme.


[![npm install tst](https://nodei.co/npm/tst.png?mini=true)](https://npmjs.org/package/tst/)

```js
// ./test.js

var test = require('tst');
var assert = require('assert');


test('Test trivial things', function() {
    var success = true;
    assert.equal(success, true);
});

test.skip('Do not test unwanted things', function () {
	var $ = require('jquery');
});

test('Group tests', function () {
	test('A', function () {

	});
	test('B', function () {

	});
});

test.only('Test of interest', function () {
	//this test is run exclusively
});

test('Async stuff', function (done) {
	this.timeout(3000);
	setTimeout(done, 2100);
})
.after(function () {
	//will be invoked after test
})
.before(function () {
	//will be invoked before the test
});
```

Run in node: `$ node ./test.js`

![Terminal](/terminal.png?raw=true "Terminal view")

or in browser: `$ beefy ./test.js`.

![Browser](/console.png?raw=true "Browser view")

If you’ve changed your mind, just return to mocha: `var test = it;`.


### Related

> [ava](https://npmjs.org/package/ava) — futuristic test runner by [@sindresorhus](https://github.com/sindresorhus).<br/>
> [mocha](https://npmjs.org/package/mocha) — vintage test runner by [@tj](https://github.com/tj).<br/>
> [tape](https://npmjs.org/package/tape) — Test Anything Protocol by [@substack](https://github.com/substack).<br/>
> [tap](https://npmjs.org/package/tap) — Test Anything Protocol by [@isaacs](https://github.com/isaacs)<br/>
> [tst](https://github.com/grahamlyons/tst) — initial version of tst by [@grahamlyons](https://github.com/grahamlyons)</br>