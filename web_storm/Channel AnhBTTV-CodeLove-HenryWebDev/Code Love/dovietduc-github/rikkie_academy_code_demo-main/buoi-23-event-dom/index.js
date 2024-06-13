// 1. Cách set và get atttibute cho 1 object selector;
let divDemo = document.querySelector('.demo')
// console.log(divDemo);
// console.dir(divDemo);
// console.log(typeof divDemo);
// class="demo" id="demo-id"
// 1.1 cách get attribute từ object selector
console.log(divDemo.getAttribute('class'))
console.log(divDemo.getAttribute('id'))
console.log(divDemo.getAttribute('duc'))
// 1.2 cách set attribute từ object selector
divDemo.setAttribute('data-id', 1)
// 2. Quản lí class trong object
// 2.1 Bài tập:
// Hãy sử dụng phương thức set-get attribute để thêm 1 class (btn-warning) vào button
// khi click button

let btnSelector = document.querySelector('button')
// 1. Thêm sự kiện cho button
// function handleClickAddClass(event) {
//     let clickedObject = event.target;
//     // bước 1: Lấy class đã tồn tại trước đấy của object
//     let classExit = clickedObject.getAttribute('class');
//     let classSet = classExit + ' btn-warning';
//     clickedObject.setAttribute('class', classSet);
// }

// bai 2: khi click button thực hiện xóa class btn-primary, trước khi thêm class btn-warning
function handleRemoveClass(event) {
  let clickedObject = event.target
  // bước 1: Lấy class đã tồn tại trước đấy của object
  let classExit = clickedObject.getAttribute('class') // btn btn-primary -> btn btn-warning
  // bước 2: Khi muốn thêm, xóa dữ liệu dễ dàng hãy nghĩ đến array
  let classExitArr = classExit.split(' ')
  // bước 3: Tìm index của phần tử array muốn xóa
  let indexDelete = classExitArr.indexOf('btn-primary')
  // bước 4: Xóa class btn-primary trong mảng
  classExitArr.splice(indexDelete, 1)
  classExitArr.push('btn-warning')
  // bước 5: Tạo class thỏa mãn điểu kiện
  let classSet = classExitArr.join(' ')
  // bước 6: set lại attribute class
  clickedObject.setAttribute('class', classSet)
}
btnSelector.addEventListener('click', handleRemoveClass)

// 3. Quản lí class selector -- phần quản lí class của selector
console.log(btnSelector.classList)
// 3.1 thêm class
btnSelector.classList.add('btn-warning')
// 3.2 Xóa class
btnSelector.classList.remove('btn-primary')
// 3.3 kiểm tra xem selector object có class nào đấy hay không?
console.log(btnSelector.classList.contains('btn'))

// 4. Event bubbling
