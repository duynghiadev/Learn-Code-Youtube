/**
 * - Dưới đây là những ví dụ về hàm tự gọi
 * - Hàm tự gọi -> nó giống như là IIEF đó
 *
 * - Hàm tự gọi nó cũng có chức năng tương tự như những hàm bình thường thôi. Thay vì mình khai báo function xong rồi gọi lại nó để thực thi. Thì khi mình sử dụng hàm tự gọi là mình khai báo hàm xong -> sau đó mình thêm dấu ngoặc đơn sau đó nữa là nó sẽ thực thi luôn
 */

// This is normal function
function printName() {
  let name = 'Job Doe'
  console.log('name 1:', name)
}
printName()

// This is self evoking function
;(function printNameNew() {
  let name = 'Mary Smith'
  console.log('name 2:', name)
})()
