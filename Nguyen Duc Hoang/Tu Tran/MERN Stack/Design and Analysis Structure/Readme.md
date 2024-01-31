# Đây là những video từ bài giảng MERN Stack từ kênh Tu Tran

[Link tutorial](https://bom.so/FrfhFj)

---

## There are some images about of project

![home](image.png)
![login](image-1.png)
![register](image-2.png)
![after when login](image-3.png)

---

![Introduction and Analysis Project](image-4.png)

---

**Analysis Back-end**

![1. Analysis source, data structure](image-5.png)
![2. Design API by standard RESTFUL](image-6.png)

---

**Back-end work flow**

![flow back-end](image-7.png)

![flow get post 1](image-8.png)
![flow get post 2](image-9.png)

- Tạo mới thì dùng phương thức POST.
- Phương thức POST thì khi gửi lên thì nó sẽ gửi 1 object (dữ liệu được gửi lên server thì sẽ gọi đó là request)
- Sau khi vào `router` thì nó sẽ vào `controller`. Nhiệm vụ của `controller` là điều khiển dữ liệu. Controller sẽ truy cập vào `database` sẽ lấy dữ liệu -> và sau khi nó có dữ liệu thì nó sẽ trả ngược về `router` đó -> và cuối cùng nó sẽ render ra giao diện cho người dùng

![flow create post](image-10.png)

---

> Design and Identify Controller

![Design and Identify Controller](image-11.png)

![Info post controller](image-12.png)
![Info user controller](image-13.png)

---

> General agreement on the response structure (Thống nhất chung về cấu trúc phản hồi)

![response structure 1](image-14.png)
![response structure 2](image-17.png)

---

> This is course MERN Stack 🤷‍♀️

> Suitable person of this course (Đối tượng phù hợp với khóa này 👨‍💻)

![Suitable person](image-15.png)

---

> There are principle in JavaScript 🚀

![desctructuring](image-16.png)
![arrow function](image-18.png)
![async await](image-19.png)
![Spread operator](image-20.png)
![Rest parameter](image-21.png)
![Ternary operator](image-22.png)

Reference: 🌈

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://javascript.info/

---

> Determine the specific tasks that need to be performed (Xác định các task cụ thể cần thực hiện 🎯) --> Sprint

![task 1](image-23.png)

---

![task 2](image-24.png)

- ExpressJS là Web framework của NodeJS
- Trong ExpressJS có những tính năng nổi bật là error handling (xử lý lỗi), middleware, body parse, route,...

**Lưu ý:**

- file `server.js` là file entry point. Khi mà client gửi request lên server thì nó sẽ vào `server.js` đầu tiên
- entry point -> có nghĩa là điểm bắt đầu
