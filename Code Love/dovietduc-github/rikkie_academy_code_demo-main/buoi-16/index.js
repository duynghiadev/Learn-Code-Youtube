// tạo ra mảng lưu được nhiều value
// 1. Cách khai báo 1 mảng
let classUserNameinfo = ['Duc', 'Dung', 'Tam', 100]
// 0: 'Duc',
// 1: 'Dung',
// 2:  'Tam',
// 3: 100,

//2. Các thành phần của một mảng
console.log(classUserNameinfo)
// 2.1 khi mảng được tạo chúng ta có thuộc tính lengh xác định số item của mảng:
console.log(classUserNameinfo.length)
// 2.2 Khi tạo mảng thì nó tự động tạo ra index(chỉ số) để xác value bất kì tromg mảng
// 2.3 lấy gia value con trong mảng phải dựa vào index
let ducInfor = classUserNameinfo[0]
let dunginfo = classUserNameinfo[1]
let tamInfo = classUserNameinfo[2]
let numberInfo = classUserNameinfo[3]
console.log(ducInfor, dunginfo, tamInfo, numberInfo)

// 3. Các cách khai bảo mảng và lưu ý
let cars = [
  'bmw', // 0
  'toyota', // 1
  'honda' // 2
] // c2 -- mỗi value trên 1 hàng

// 4. sette và gette trong mảng
// (lấy giá trị con trong mảng và gán lại giá trị con trong mảng)

// 4.1 gette
console.log(typeof cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(typeof cars) // kiểu dữ liệu mảng là object
// 4.2 sette (thay đổi giá trị value con đến giá trị mới)
let x = 'helloword'
cars[1] = 'rollroy'
// gán thử các giá trị khác đến value khác
console.log('item 1', cars[1])

// 5. cách lấy các item trong mảng dynamic
// động nghĩa là nó không lấy trực tiếp qua key của nó
// mà nó lấy gián tiếp, thông thường là qua biến
for (let index = 0; index < cars.length; index++) {
  console.log('car item', cars[index])
}

// 6. Thêm phần tử vào mảng
// muốn thêm phần tử vào cuối
cars[3] = 'suzuki'
cars.push('kia morning') // hàm này thêm item vào cuối mảng và tạo index
cars.unshift('first car') // ít dùng
console.log('cars', cars)

// 7. Xoá phần tử của mảng
cars.pop()
console.log('cars', cars) // xóa phần tử cuối trong mảng
