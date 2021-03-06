import t from './index.js'

t('assertions', t => {
  t.is(1, 1)
  // t.notEqual(1, 2)
  t.is([1], [1])
  t.pass('passed')
})

t('passes', t => {
  t.ok(true);
  t.ok(true, 'this time with an optional message');
  t.ok('not true, but truthy enough');

  t.is(1 + 1, 2);
  t.is(Math.max(1, 2, 3), 3);
  t.is([1, {x: 2, y: { z: 3 }}], [1, {y: { z: 3 }, x: 2}]);

  t.throws(() => {
    throw new Error('oh no!');
  }, /oh no!/);

  t.any(3, [1, 2, 3])
  t.any(1, [1, 2, 3], 'equals any msg')
  t.any(1, [1, 2, 3], 'one of')
  t.any(['b'], [['a'], ['b']])

  t.almost(0.1, new Float32Array([0.1])[0])
  t.almost([0.1], new Float32Array([0.1]))

  t.same([0, 1], [1, 0])

  t.not([0, 1], [0, 2])
  t.not(1,2)
  t.not({x:1},{x:2})
  t.not(document.createElement('a'),document.createElement('a'))
  t.not(new Date,new Date(1))

  t.pass('ok')
})

t('fails', t => {
  t.is(42, '42');
  t.is({}, {x:1});
  t.is([1,2,3], [4,5,6], 'arrs')

  t.any(1, [2, 3])
  t.any(['a'], [['b'], ['c']])

  t.almost(0.11, new Float32Array([0.1])[0])
  t.almost([0.11], new Float32Array([0.1]))

  t.same([0, 1], [1, 0, 1])

  t.not([0, 1], [0, 1])
  t.not(1,1)
  t.not({x:1},{x:1})

  t.fail('test failed')
})

t('async fail', async t => {
  await new Promise(ok => setTimeout(ok))
  // t.fail('test failed')
  throw Error('xxx')
})


t.node('node-only', t => {
  t.is(1, 1)
  t.ok(true)
})

t.browser('browser-only', t => {
  t.is(1, 1)
  t.ok(true)
})

t('async ok', async t => {
  await new Promise(ok => setTimeout(ok, 500))
  t.pass('ok')
})

t.demo('demo-run', t => {
  t.is(1, 1)
  t.ok(false)
})

t.skip('this is skipped', t => {
  t.pass('ok')
})

t.todo('to be done', t => {
  t.is(1, 1)
  t.ok(true)
})

t.fixme('to be fixed', t => {
  t.is(1, 1)
  t.ok(false)
})

t('async end', async t => {
  await new Promise(ok => setTimeout(ok, 500))
  t.pass('ok')
})
