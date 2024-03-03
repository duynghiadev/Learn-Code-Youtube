# Sơ lược vòng đời của Event loop callback promise async await trong Javascript qua chuyện tăng lương

[Link video](https://s.net.vn/h2OC)

Event loop callback promise async await.
Lẽ ra video này ra sớm hơn cách đây 3 năm thì có lẽ là đẹp hơn, vì nhiều bạn mông lung trong những kiến thức này. Nhưng dù sớm hay muộn cũng nên có video này. Mỗi thế hệ lập trình cũng có lớp này lớp kia phải không.

Time lines:

```bash
00:00 Sơ lược về Event Loop trong javascript
10:15 Tìm hiểu về callback trong javascript
13:40 Tìm hiểu về Promise trong Javascript
18:10 Tìm hiểu về Async Await trong Javascript thông qua câu chuyện tăng lương
```

---

- Lưu ý:

  - Khi thành công (resolve) thì sẽ run vào then()
  - Khi thất bại (reject) thì sẽ run vào catch()

- Khi học cái gì mới thì phải nhớ 2 điều này:

  - Nó sử dụng để làm gì ?
  - Sử dụng nó như thế nào ?

- Có nhiều cách đồng bộ, chẳng hạn như:

  - Đồng bộ song song
  - Đồng bộ tuần tự
  - Các hàm lồng nhau về cách không tuần tự
  - v.v... (Có rất nhiều đồng bộ, chúng ta cần biết những thứ cơ bản và hay dùng nhất)

- Luôn luôn nhớ:

  - Quy tắc đơn giản khi sử dụng Async / Await
  - Một hàm mà sử dụng Async/Await thì luôn luôn trả về Promise
  - Khi bắt lỗi thì nên sử dụng bắt lỗi trong try catch

---
