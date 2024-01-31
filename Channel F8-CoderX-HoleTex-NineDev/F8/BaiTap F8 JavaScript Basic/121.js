function sumCb(a, b) {
  return a + b;
}
function subCb(a, b) {
  return a - b;
}
function multiCb(a, b) {
  return a * b;
}
function divCb(a, b) {
  return a / b;
}
function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
