/**
 * - Với let, const sẽ không cho phép khai báo cùng tên biến trên cùng 1 phạm vi
 * - Nhưng var thì khai báo được => các bạn nên tránh sử dụng biến var nhé !!! Biến var nó sẽ ghi đề giá trị trước đó nếu mình khai báo cùng tên biến (biến sau đề biến trước)
 */

//var x = 5
//var x = 10

/**
 * - Trong trường hợp khai báo biến thì nên sử dụng let và const => Vì 2 biến đó chính xác hơn
 * - Với lại let, const tránh được hoisting trong JavaScript => các bạn nên tìm hiểu về phần này nhé !!!
 */

/**
 * - Đối với let và const thì phạm vi biến của nó là block-scope => tức là phạm vi giá trị của nó được liên quan trong 2 dấu ngoặc nhọn thôi {}
 */

let y = 10

if (true) {
  let y = 12
  console.log('y in if:', y)
}
console.log('y outside if:', y)
