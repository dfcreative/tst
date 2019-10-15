import fastDeepEqual from 'fast-deep-equal'

const isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'


let only = 0
export let current = null
let passed = 0
let failed = 0
let skipped = 0
let running = false
let planned = new Set()


export function test(name, fn) {
  if (!fn) return test.todo(name)
  fn._name = name
  planned.add(fn)
  start()
}
test.todo = function (name, fn) {
  skipped++
  fn._name = name
  fn._todo = true
  start()
}
test.skip = function (name, fn) {
  skipped++
  fn._name = name
  fn._skip = true
  planned.add(fn)
  start()
}
test.only = function (name, fn) {
  only++
  fn._name = name
  fn._only = true
  planned.add(fn)
  start()
}


function start() {
  if (running) return
  running = true
  let p = Promise.resolve()
  for (let fn of planned) {
    if (only && !fn._only) continue
    p.then(() => run(fn)).then(() => passed++, () => skipped++)
  }

  p.then(() => {
    // summarise
    console.log(`\n═════\n`)
    const total = passed + failed + skipped
    if (only) console.log(`# total ${only} of ${total}`)
    else console.log(`# total ${total}`)
    console.log(`✔ passed ${passed}`)
    console.log(`✘ failed ${failed}`)
    if (skipped) console.log(`⋯ skipped ${skipped}`)
  })
}

function run(fn) {
  if (fn._skip) {
    isNode ?
      console.log(`⋯ ${fn._name}`) :
      console.log(`%c⋯ ${fn._name}`, 'color: #ddd')
    return
  }

  if (fn._todo) {
    console.log(`🚧 ${fn._name}`)
    return
  }

  current = fn
  console.log(`# ${fn._name}`)
  return (new Promise(fn)).catch(err => {
    failed += 1
    // FIXME: this syntax is due to chrome not always able to grasp the stack trace from source maps
    console.error(err.stack)
  })
}


export function is(a, b, msg = 'should be the same') {
  if (arguments.length < 3 && typeof a === 'boolean') {
    if (typeof b === 'string') msg = b
    b = Boolean(b)
  }

  console.assert(fastDeepEqual(a, b), `${msg}`, { actual: a, expected: b }, new Error())
}

export default test
