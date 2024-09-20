function foo() {
  throw new Error('Quớ làng')
}

function bar() {
  return foo()
}

function far() {
  return bar()
}

function boo() {
  return far()
}

boo()
