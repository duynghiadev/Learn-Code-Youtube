/**
 * Quản Lý Bộ Nhớ Garbage Collector Trong Javascript | Justin Nguyen🚀
 */
/**
 * - Trong bài này chúng ta sẽ học về: Memory Management in JS 🤷‍♀️🤷‍♀️🤷‍♀️ (Nên search google)
 *  - Allocate the memory you need, use the allocated memory (read, write)
 *  - Garbage Collection: Release the allocated memory when it is not needed anymore
 *
 * - Common Problem: Circular ref and Mark & Sweep Algorithms
 * - Trong thực tế ngày nay thì Mark & Sweep Algorithms được sử dụng rộng rải và phổ biến hơn rất nhiều
 */
let i = 10
let obj = {
  name: 'Justin'
}
let print = function () {
  const name = 'Duynghiadev'
  console.log('name:', name)
}
let arr = [1, 2, 3, 'Justin']
button.on('click', function () {})

// Garbage Collection
// Hiểu nôm na là không còn tham chiếu đến object đó nữa thì sẽ bị xóa
let obj_1 = {
  name: 'Justin',
  age: 20
}
let newObj_1 = obj_1
obj_1 = 1
let prop = newObj_1.name
newObj_1 = 'Justin'
prop = null

// Circular ref
function a() {
  const a1 = function () {}
  const a2 = function () {}
  a1.a = a2
  a2.a = a1
}
a()

// Trong thực tế thì chúng ta sẽ thấy những đoạn code như thế này
let div
window.onload = function () {
  div = document.getElementById('myDivElement')
  div.circularReference = div
  div.lotsOfData = new Array(10000).join('*')
}
