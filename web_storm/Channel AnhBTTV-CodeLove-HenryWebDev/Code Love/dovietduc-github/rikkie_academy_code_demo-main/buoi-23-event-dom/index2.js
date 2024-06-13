// Event Bubbling
//  Event Bubbling nó chỉ là 1 giải pháp thay thế, nên được sử dụng khi Dom đữo
// render lại nhiều lần

// Bài toán đặt ra:
// Khi click vào bất kì con nào (child 1, 2, 3)-> hãy
// hiển thị dòng chữ hello
// cách 1
// let childAll = document.querySelectorAll('.item');

function handleShowHello(event) {
  let clicked = event.target
  console.log(clicked.classList.contains('item'))
}

// for(let i = 0; i < childAll.length; i++) {
//     childAll[i].addEventListener('click', handleShowHello);
// }

// EVent bubbling
// 1. Chọn cha ngoài cùng và thêm sự kiện cho cha
let parent = document.querySelector('.flex_box')
parent.addEventListener('click', handleShowHello)
