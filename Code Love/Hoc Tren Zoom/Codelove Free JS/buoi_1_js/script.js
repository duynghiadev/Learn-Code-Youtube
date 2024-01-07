// 1. Hướng dẫn hiển thị dòng chữ xin chào thế giới
console.log('Hello Việt Nam')

// 2. Tìm hiểu khai báo biến trong JavaScript
var nameInfo

// 3. Khởi tạo giá trị ban đầu cho biến
// gán value 'duynghiadev' cho biến nameInfo
nameInfo = 'duynghiadev'

// 4. Các bạn có thể kết hợp khai báo biến + khởi tạo giá trị ban đầu
var companyInfo = 'duynghiadev ok'

// update variable
companyInfo = 'duynghiadev fullstack'

// 5. Kiểu dữ liệu trong JavaScript
// 5.1 Kiểu dữ liệu boolean

// 1. Kiểm tra kiểu dữ liệu bằng cách log value
console.log(typeof true)
console.log(typeof false)
// 2. Lấy ví dụ về biến gán value boolean
var x = true
var y = false
console.log('typeof x:', typeof x)
console.log('typeof y:', typeof y)

// 5.2 Kiểu dữ liệu string
console.log('typeof duynghia:', typeof 'duynghia')
console.log('typeof duynghiadev:', typeof `duynghiadev`)
var nameClone = 'duynghiadev'
console.log('typeof nameClone:', nameClone)

// 5.3 Kiểu dữ liệu number
console.log('typeof 12:', typeof 12)
console.log('typeof 13.8:', typeof 13.8)
var weight = 12
var height = 12.8
console.log('typeof weight:', typeof weight)
console.log('typeof height:', typeof height)

// 5.4 Kiểu dữ liệu undefined: khi chúng ta khai báo biến mà không gán giá trị khởi tạo ban đầu cho nó
console.log('typeof undefined:🤷‍♂️', typeof undefined)
var z
console.log('typeof z:', typeof z)

// 5.5 Kiểu dữ liệu null: cái này là bug của JavaScript, mà chúng nó không thể fix được
console.log('typeof null:', typeof null)
var isNull = null
console.log('typeof isNull:', typeof isNull)

// 5.6 Kiểu dữ liệu object
console.log('typeof []:', typeof [])
console.log('typeof {}:', typeof {})
