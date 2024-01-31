## Dưới đây là khái niệm của hook useEffect

1. useEffect là gì?

- Chữ Effect đề cập đến một thuật ngữ function programming được gọi là 'side effect'

2. Cách nhận biết side effect

- Side effect không thể đoán trước được bởi vì chúng là những hành động được thực hiện với thế giới bên ngoài 
- Chúng ta thực hiện 1 `side effect` khi chúng ta cần thực hiện các tác vụ bên ngoài `React Component`
- Có nghĩa là các tác động bên ngoài tác động vào bên trong component, làm cho component thay đổi về data

3. Common side effect sử dụng trong thực tế

- Thông thường nó là các browser APIs gồm: call 1 cái API đến server
- Cập nhật DOM: như là `document.title = 'giá trị gì đấy'`
- Hoặc các even listenner như các hàm: setTimeout, setInterval
- Và các bạn làm cái ứng dụng Real Time như `Socket.io`, `Subcrible`, `UnSubcriible`,... thì nó cũng sẽ thuộc vào trường hợp `side effect` nhé!!

**Các bạn có thể tìm hiểu thêm trên google với keywords: browser APIs, side effect**