let dropDownList = document.querySelectorAll('.dropdown') // Chỉ lấy NodeList
let dropDownListArray = Array.from(document.querySelectorAll('.dropdown')) // truy cập vào bên trong nó và lấy array nó ra luôn
console.log('dropDownList:', dropDownList)
console.log('dropDownListArray:', dropDownListArray)

// Ta có 2 cách lặp qua các phần tử của mảng: dùng cách nào cũng được
// Cách 1: dùng forEach
dropDownList.forEach(function (el, idx) {
  let btn = el.querySelector('.btn')
  console.log('btn:', btn)
  btn.addEventListener('click', function (event) {
    console.log('event:', this)
    let elTest_1 = el.classList
    let elTest_2 = el.classList.value
    console.log('elTest_1:', elTest_1)
    console.log('elTest_2:', elTest_2)
    /**
     * - Chúng ta có cách xử lý như sau:
     *  - Nếu phần tử 'el' đã tồn tại trong class 'open' rồi -> Thì tiến hành remove (xóa)
     *  - Ngược lại nếu phần tử 'el' chưa có trong class 'open' -> Thì mình thêm vào
     */
    if (el.classList.value.indexOf('open') === -1) {
      el.classList.add('open')
    } else {
      el.classList.remove('open')
    }
  })
})

// Cách 2: dùng vòng lặp for như bình thường
// for (let index = 0; index < dropDownList.length; index++) {
//   let value = dropDownList[index]
//   callBackFn(value, index)
// }
// function callBackFn(el, idx) {
//   console.log('el:', el)
//   console.log('idx:', idx)
// }
