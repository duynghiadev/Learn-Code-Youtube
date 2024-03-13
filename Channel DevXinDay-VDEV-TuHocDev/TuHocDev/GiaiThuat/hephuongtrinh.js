/**
 * Giải hệ phương trình:
 * a1X + b1Y = c1
 * a2X + b2Y = c2
 *
 * Giải thuật cho bài toán:
 *
 * - bước 1:
 *
 * Rút x từ phương trình thứ nhất
 * X = (c1 - b1Y) / a1
 * a2X + b2Y = c2
 *
 * - bước 2:
 *
 * thay x vào phương trình thứ 2
 * a2*(c1 - b1Y)/a1 + b2Y = c2
 *
 * tương đương với (chuyển vế)
 * y = (a1*c2 - a2*c1) / (b2*a1 - a2*b1)
 *
 * - bước 3: Sau khi tính được y thì ta thay thế y vào phương trình thứ nhất để tính x
 *
 * x = (c1 - b1Y) / a1
 */

let a1 = 3
let b1 = -5
let c1 = 32

let a2 = -4
let b2 = 1
let c2 = 6

const tinhY = () => {
  return (a1 * c2 - a2 * c1) / (b2 * a1 - a2 * b1)
}

const tinhX = () => {
  return (c1 - b1 * tinhY()) / a1
}

console.log('X = ', tinhX())
console.log('Y = ', tinhY())
