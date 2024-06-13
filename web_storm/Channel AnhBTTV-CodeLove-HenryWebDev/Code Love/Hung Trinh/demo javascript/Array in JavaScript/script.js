/**
 * forEach. Khi dùng vòng lặp này thì nó không có thuộc tính return. Và mỗi lần lặp thì nó sẽ trả về 1 phần tử cho đến hết
 */
let myArr = [1, 2, 3, 4]
myArr.forEach((value) => {
  console.log('forEach', value)
  console.log('-------------------')
})

/**
 * map. Lặp qua mảng đầu tiên và tạo ra mảng mới. Không ghi đè mảng cũ
 */
let myArr1 = [1, 2, 3, 4]
let result = myArr1.map((value) => {
  return value * 2
})
console.log('map', result)
console.log('-------------------')

/**
 * find: tìm ra thấy true là thoát lun, dù trong mảng vẫn có thêm các phần tử đúng. Nó return về 1 phần tử
 */
let myArr2 = [1, 2, 3, 4]
let result1 = myArr2.find((value) => value < 4)
console.log('find', result1)
console.log('-------------------')

/**
 * filter: lọc ra các phần tử true trong mảng, tìm xong hết thì nó mới return về. Nó return về 1 mảng
 */
let myArr3 = [1, 2, 3, 4]
let result2 = myArr3.filter((value) => value < 4)
console.log('filter', result2)
console.log('-------------------')

/**
 * some: Chỉ trả về giá trị true hoặc false.Thằng này thì chỉ cần duy nhất 1 thằng đúng thôi thì nó mới trả về true
 */
let myArr4 = [1, 2, 3, 4]
let result3 = myArr4.some((value) => value < 3)
let result4 = myArr4.some((value) => value < 0)
console.log('some 1', result3)
console.log('some 2', result4)
console.log('-------------------')

/**
 * every: Chỉ trả về giá trị true hoặc false.Thằng này thì bắt buộc tất cả thằng đều đúng thì nó mới trả về true
 */
let myArr5 = [1, 2, 3, 4]
let result5 = myArr5.every((value) => value < 4)
let result6 = myArr5.every((value) => value <= 4)
console.log('every 1', result5)
console.log('every 2', result6)
