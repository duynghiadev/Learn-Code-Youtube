# Phân tích tài liệu validate cho phần register

## Phần yêu cầu về bài toán cho trước (Input)

Đây là yêu cầu cho validate trường nhập thông tin **name**

- Tên không được để **trống**

Đây là yêu cầu cho validate trường nhập thông tin **email**

- email không được để **trống**
- email phải có **ít nhất 3 kí tự**
- email phải đúng **định dạng email**

Đây là yêu cầu cho validate trường nhập thông tin **password**

- password không được để **trống**
- password phải **có ít nhất 8 kí tự cho bảo mật**

Đây là yêu cầu cho validate trường nhập thông tin **confirm_password**

- confirm_password không được để **trống**
- confirm_password phải **có ít nhất 8 kí tự cho bảo mật**
- confirm_password phải **trùng với giá trị password**

## Bài toán cần được giải quyết (Output)

- Hiển thị lỗi validate **cho từng ô input**
- Khi tất cả input **hợp lệ thì sẽ submit form**
- Thêm các sự kiện khác nhau để hiển thị lỗi **tốt cho trải nghiệm người dùng (phần phụ)**

## Chuyển các yêu cầu từ dạng text sang dạng coding

- Chúng ta sẽ chuyển những yêu cầu đó thành dạng object

- Từ cái bài toán mình đã đưa vào cái đầu vào dưới dạng 1 cái biến (variable) để thể hiện qua tất cả những yêu câu ở đây

```jsx
const rules = {
  name: required,
  email: required | minlength:3 | email,
  password: required | minlength:8,
  confirm_password: required | minlength:8 | same_pass: password
}
```

1. Chuẩn hóa dữ liệu

- Chuẩn hóa dữ liệu có nghĩa là đưa vào yêu cầu của đầu vào

- Trong phần này thì ta cần bóc tách các item trong rules thành các phần nhỏ (gồm key: value)

- Lưu ý: item có nghĩa là 1 object gồm có key và value

- Khi chuyển về kiểu này thì chúng ta nhìn sẽ dễ nhìn hơn rất nhiều

```jsx
const rules = {
  name: {
    required: true,
  },
  email: {
    required: true,
    minlength: 3,
  },
  password: {
    required: true,
    minlength: 8,
  },
  confirm_password: {
    required: true,
    minlength: 8,
    equal_to: password,
  },
}
```
