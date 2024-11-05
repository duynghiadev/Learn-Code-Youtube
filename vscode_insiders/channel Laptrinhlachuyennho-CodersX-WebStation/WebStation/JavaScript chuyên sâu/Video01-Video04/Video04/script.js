/**
 * Normal Function
 */
console.log('Normal Function 🚀')
function binhthuong(x) {
  console.log('Ham binh thuong: ', x)
}
binhthuong('duynghiadev')

console.log('='.repeat(40))
console.log('Excution Function 🚀')
/**
 * Excution Function
 */
;(function thucthi(x) {
  console.log('Ham thuc thi: ', x)
})('duynghiadev')

let Module = (function () {
  let private = 'Day la private variable'

  function privateFunc() {
    console.log('Day la ham private. Updated -', private)
  }

  const publicFunc = function () {
    privateFunc()
  }

  return {
    publicData: private,
    publicFunc: publicFunc
  }
})()

console.log('Module.publicData:', Module.publicData)
console.log('Module.private:', Module.private)
Module.publicFunc()
