// Falsy: null, undefined, NaN, 0, '', false

let height = 0
if (height || height === 0) {
  console.log('height co gia tri', height)
} else {
  console.log('height khong co gia tri', height)
}

let height2 = '23' // string

/**
 * === thì vừa so sánh kiểu dữ liệu, vừa so sánh giá trị
 * == thì chỉ so sánh giá trị
 */
if (height2 === 23) {
  console.log('Chay vao day')
} else {
  console.log('Chay vao ben duoi else')
}
