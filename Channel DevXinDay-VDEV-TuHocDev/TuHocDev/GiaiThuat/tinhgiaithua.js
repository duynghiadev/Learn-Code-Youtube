// tính giai thừa
// n! = 1 x 2 x 3 x...x n

function tinhGiaiThua(n) {
  let ketqua = 1
  for (let i = 1; i <= n; i++) {
    ketqua = ketqua * i
  }
  return ketqua
}

let result = tinhGiaiThua(5)
console.log(result)
