// Sử dụng cú pháp khai báo đối tượng ngắn gọn
let sv = {
  hoTen: prompt('Họ và tên: '),
  diem: parseFloat(prompt('Điểm:')), // Chuyển đổi từ kiểu string sang kiểu number để so sánh
  hocLuc: null,
  hienThi: function () {
    // Sử dụng toán tử ba ngôi để ngắn gọn if-else
    this.hocLuc = this.diem >= 5 ? 'Đậu' : 'Rớt'

    // Sử dụng template literals để tạo chuỗi HTML
    document.write(`<h3>Họ và tên: ${this.hoTen}</h3>`)
    document.write(`<h3>Điểm: ${this.diem}</h3>`)
    document.write(`<h3>Học lực: ${this.hocLuc}</h3>`)
  }
}

// Gọi phương thức hiển thị
sv.hienThi()
