import t from './index.js'
t('these tests will all pass', t => {
	t.ok(true);
	t.ok(true, 'this time with an optional message');
	t.ok('not true, but truthy enough');

	t.is(1 + 1, 2);
	t.is(Math.max(1, 2, 3), 3);
	t.is({}, {})

	t.throws(() => {
		throw new Error('oh no!');
	}, /oh no!/);

	t.pass('ok')
})

t('these tests will not pass', t => {
	t.is(42, '42');
	t.is({}, {x:1});

	t.fail('nok')
})

t.skip('this test will not run', t => {
	t.pass('ok')
})
