import { test, is } from '.'

test.only('basic tests', pass => {
  is(1, 2)
  is(1 !== 1)
  is([1], [1,2])
  pass('passed')
})

test('these tests will all pass', pass => {
  is(true);
  is(true, 'this time with an optional message');
  is('not true, but truthy enough');

  is(1 + 1, 2);
  is(Math.max(1, 2, 3), 3);

  err(() => {
    throw new Error('oh no!');
  }, /oh no!/);

  pass('ok')
})

test('these tests will not pass', t => {
  eq(42, '42');
  eq({}, {});

  fail('nok')
})

test.skip('this test will not run', t => {
  pass('ok')
})
