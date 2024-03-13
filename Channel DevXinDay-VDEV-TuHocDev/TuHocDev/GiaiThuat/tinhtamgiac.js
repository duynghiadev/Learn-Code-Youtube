/**
 * Tính chu vi hình tròn: C = 2*pi*r
 *
 * Diện tích hình tròn: S = pi*r*r
 */

// chu vi hình tròn
function tinhChuVi(r) {
  return 2 * Math.PI * r
}

let result = tinhChuVi(10)
console.log('chu vi:', result)

console.log('==============================')

// diện tích hình tròn
function tinhDienTich(r) {
  return Math.PI * r * r
}

let result_1 = tinhDienTich(10)
console.log('diện tích:', result_1)
