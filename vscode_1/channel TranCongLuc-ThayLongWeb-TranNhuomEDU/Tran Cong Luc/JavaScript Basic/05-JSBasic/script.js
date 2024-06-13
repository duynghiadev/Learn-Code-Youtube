/**
 * Hàm là gì?
 * - Hàm là một đoạn chương trình độc lập, thực hiện một khối chức năng nhất định nào đó, sau khi thực hiện xong => trả về một giá trị cho chương trình gọi nó. Chia nhỏ code
 */
let yearJohn = 0
function myAge(year) {
  // Hàng loạt thao tác tính toán
  return 2023 - year
}
function changeAge() {
  yearJohn = 1990
}
changeAge() // Lời gọi hàm, Function call
let age = myAge(yearJohn)
console.log('age:', age)

const printContent = (firstName, job) => {
  switch (job) {
    case 'teacher':
      console.log(`${firstName} is a teacher`)
      break
    case 'docter':
      console.log(`${firstName} is a docter`)
      break

    default:
      console.log(`${firstName} is a other job`)
      break
  }
}
printContent('John', 'docter')
printContent('John', 'teacher')
printContent('John', 'worker')
