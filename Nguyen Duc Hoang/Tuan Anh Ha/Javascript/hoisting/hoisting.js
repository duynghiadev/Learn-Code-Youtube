/**
 * - Trong những phiên bản code cũ thì người ta hay sử dụng biến var để khai báo. Khi mình khai báo biến var sau khi gán giá trị thì nó sẽ in ra bình thường.
 * - Thì nó rất khác so với biến let và const (ES6).
 * - Khi mình sử dụng biến let, const thì mình phải khai báo biến trước khi sử dụng hoặc gán giá trị cho biến
 * - Còn về cách thức các biến hoạt động như thế nào thì có thể tìm hiểu thêm về scope variable và closure
 */
name = 'John'
console.log(name)
var name

name_1 = 'John Doe'
console.log(name_1)
let name_1

// name_2 = 'James'
// console.log(name_2)
// const name_2