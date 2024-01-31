function checkOneElementExit(userArray, callback) {
  for (let i = 0; i < userArray.length; i++) {
    if (callback(userArray[i])) {
      return true
    }
  }
  return false
}

Array.prototype.someCustom = function (callback) {
  console.log('>>> this is callback', callback)
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true
    }
  }
  return false
}

// không chính xác
// 1. Đảm bảo code mới hoạt động ok
// 2. Code cũ cũng hoạt động ok

// senior --> nghĩ nhiều --> sau này ít bug nhất --> họ có sửa đổi --> không ảnh hưởng code cũ

// if (email) --> điều kiện của bài toán khác biệt --> hiện tại đang viết trong core common --> nên để người sử dụng thư viện đưa vào

// thực thi hàm if (trong đây là 1 hàm thực thi -> true -> false -> dựa vào điều kiện trong body hàm)

// 1. Kết luận: hàm define điều kiện do người dùng thư viện define ra
// 2. Thay điều kiện bằng lời gọi hàm
