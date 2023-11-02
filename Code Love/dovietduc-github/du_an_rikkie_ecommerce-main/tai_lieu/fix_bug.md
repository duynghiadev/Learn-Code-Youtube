# Lỗi khi xóa hêt data

1. file common.js dòng 7: Khi không có data users ở local thì dùng hàm find lỗi do không phải kiểu dữ liệu array
`Thay JSON.parse(localStorage.getItem('users')) thành JSON.parse(localStorage.getItem('users')) || []`

2. file index.js dòng 95: cùng lỗi với phần 1
`thêm || [] vào let products = JSON.parse(localStorage.getItem('products')) || [];`


3. file index.js dòng 12: cùng lỗi với phần 1
 `thêm || [] vào let products = JSON.parse(localStorage.getItem('products')) || [];`


4. file category.js dòng 13: cùng lỗi với phần 1
`Thêm [] vào let categorys = JSON.parse(localStorage.getItem('categories')) || []`

5. Lỗi chưa tạo category
`Đã sửa thêm if`

6. my_acount_product.js dòng 276: cùng lỗi với phần 1
`thêm [] let categorys = JSON.parse(localStorage.getItem('categories')) || [];`