/*
 * Vòng lặp while thì nó kiểm tra điều kiện rồi thì nó mới thực thi code bên trong 👇
 * */
let i = 1
let j = 10

while (i <= 10) {
  document.write(i + '<br/>')
  i++
}

document.write('<h4>----</h4>')

while (j >= 1) {
  document.write(j + '<br/>')
  j--
}

// let value = null
// while (value < 1 || value > 10) {
//   value = prompt('Nhập vào số từ 1 đến 10')
// }
// alert('Số bạn nhập là đúng và nó là số ' + value)

/*
 * Vòng lặp do while thì nó chạy code bên trong do rồi nó mới kiểm tra điều kiện trong while 👇
 * */
// let value_2 = null
// do {
//   value_2 = prompt('Bạn hãy nhập số từ 1 đến 10')
// } while (value_2 < 1 || value_2 > 10)
// alert(`Số bạn nhập là ${value_2}`)

// Thiết lập cái ma trận 10x10 👇
let matrix = 0
while (matrix < 10) {
  let matrix_2 = 0
  while (matrix_2 < 10) {
    document.write('[' + matrix + '][' + matrix_2 + ']')
    matrix_2++
  }
  document.write('<br/>')
  matrix++
}
