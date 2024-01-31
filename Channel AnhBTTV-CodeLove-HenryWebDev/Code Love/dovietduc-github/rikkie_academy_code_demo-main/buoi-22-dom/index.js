// 1. Dom Là gì? Nó viết tắt của Document Object Model
let objDemo = {
  name: 'duc',
  job: 'it',
  // ở đây hàm chỉ khai báo trong object
  run: function () {
    console.log(123)
  }
}

// 1. Lấy gia value của object
console.log(objDemo.name)
objDemo.run()
// 2. cách gán lại value mới
objDemo.name = 'duy'
console.log(objDemo)

// 2. Dom được hình thành như thế nào
// document là object lớn nhất hay là object root
console.dir(document)
console.log(typeof document)

// 3. Cách lấy ra các object trong Dom
// 3.1 Cách lấy ra 1 object trong Dom
let pFirst = document.querySelector('h2.error')
console.log('pFirst', pFirst)
console.dir(pFirst)
console.log(typeof pFirst)
// 3.2 Cách lấy ra nhiều object trong Dom
let pAll = document.querySelectorAll('p')
// Vẫn phải lấy ra từng object để thao tác Dom
for (let i = 0; i < pAll.length; i++) {
  console.log(pAll[i])
}
// 3.3 Nhớ Luôn luôn liên hệ đến 1 object để thay đổi dom

// 1. cách lấy ra 1 object hoặc nhiều object (querySelector, querySelectorAll)
// 2. Dùng thuộc tính innerHTML của object để thay đổi DOM
// 3. Cách thêm 1 sự kiện cho object (Khi người dung action lên web chạy hàm định nghĩa)
