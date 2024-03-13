// tính giai thừa
// n! = 1 x 2 x 3 x...x n

// sử dụng vòng lặp for
function tinhGiaiThua(n) {
  let ketqua = 1
  for (let i = 1; i <= n; i++) {
    ketqua = ketqua * i
  }
  return ketqua
}

let result = tinhGiaiThua(5)
console.log('vòng lặp for:', result)

console.log('===========================================')

// sử dụng đệ quy
function tinhDeQuy(n) {
  if (n <= 1) {
    return 1
  }
  console.log(`n: ${n}, n-1: ${n - 1}`)
  return n * tinhDeQuy(n - 1)
}

let result_1 = tinhDeQuy(5)
console.log('đệ quy:', result_1)
