function foo() {
  return 'foo'
}

function bar() {
  return foo() + ' bar'
}

function far() {
  return bar() + ' far'
}

function boo() {
  console.log(far() + ' boo')
}

boo()
