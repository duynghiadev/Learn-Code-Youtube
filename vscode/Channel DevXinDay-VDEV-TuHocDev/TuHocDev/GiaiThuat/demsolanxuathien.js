// khởi tạo 1 dãy số
let arr = [12, 33, 54, 34, 67, 56, 87, 98, 47, 82, 33, 87, 98, 87]

// khởi tạo số cần tìm kiếm
let numberSearch = 87

// khởi tạo hàm để tìm số
const count = (input, number) => {
  // khởi tạo 1 biến để lưu giá trị tạm thời
  let dem = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === number) {
      dem = dem + 1
    }
  }

  // in kết quả ra màn hình
  console.log(`Số lượt xuất hiện của ${number} là: ${dem} lần`)
}

count(arr, numberSearch)
