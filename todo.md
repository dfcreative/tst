* make tap-compatible interface test(name, test => test.end()) - we avoid `this`
* make test.timeout = N be possible to set up once for all tests
* safari does not have `console.group`
* add this.skip function to skip tests from within
* add test.todo type, a test which is skipped-like, but waiting for impl
* add `test.run` method to re-run it, possibly with other params of compiler, etc. Very useful for comparison the same test with different options. Maybe name it `call`.
* errors stacktrace is really shitty sometimes. Eg if there is a list of assertions, it definitely should at least show the line of assertion, not some inner senseless stack. Some tests eat any reference to initial source, so that tap is winning not even having `only` method.
* place console outputs into the test group. It is annoying in browser looking for a test logging into console.
* add this.test method adding a subtest;
* add this.before, this.after, this.on;
* add benchmark function, comparing inner tests ops/s, %, rating (winner/loser)
* show status of grouped parent tests as the summary status of the children
* think of impementing sync strategy - just form a test source code based on collected grouped tests.
	* Or fix up errors - now they are awful. throwing string, throwing error etc.
		* though it may depend on server runner, not the tst itself
* measure time for the parent test as a sum of inner times (if contain kids - do not end timer).
* show diff nicely, at least line numbers with diff, or objects
* force done if test error happened, do not wait for it to be called
* make stack trace not worse than mocha
* async tests throw uncatchable errors in callbacks (in browser), in settimeouts
* assertion error in chrome looks unwieldy.
	* that is because of redefining this.stack in error.
	* maybe use [stack-utils](https://www.npmjs.com/package/stack-utils) or alike?
	* an idea - to capture stack on test start, to see at least the entry point. And then parse with stacktrace-parser or alike.
* async errors loose good stacktrace :(
