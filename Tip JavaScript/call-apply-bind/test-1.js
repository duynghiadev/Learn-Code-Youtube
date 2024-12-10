function log(msg) {
  console.log(msg)
}
log(1)
log(1, 2)

console.log('--------------------------')

function logApply() {
  console.log.apply(console, arguments)
}
logApply(1)
logApply(1, 2)
