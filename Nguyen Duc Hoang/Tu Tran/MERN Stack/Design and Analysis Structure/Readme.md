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

---

![task 3](image-27.png)

**Lưu ý:**

- Trong phần này mình sẽ học về `middleware`

**`Middleware` là gì?**

- `Middleware` là 1 function, nó nằm giữa request và response (yêu cầu từ client và phản hồi từ phía server)

- Ví dụ: 🎉

  - Khi mình tạo bài post thì request sẽ đi vào server -> server đi vào route -> route nó đi vào controller để tạo bài viết -> controller nó liên kết với database -> và cuối cùng nó sẽ trả về theo thứ tự đó -> xong nó render ra giao diện

- Nhược điểm: ✅

  - Bất cứ người dùng nào (kể cả người có account và người không có account) thì có thể vào để tạo bài viết. Thì để làm sao mà xác thực người dùng kiểm tra là: mình chỉ cho những người dùng có tài khoản thôi thì người ta mới có quyền tạo bài post

  👉 Thì lúc đó thằng `middleware` mới nhảy vào giữa và dùng. Khi mà server nó vào route. Thì bình thường nó sẽ vào controller, thì lúc này nó sẽ vào thằng `middleware` (nó là 1 function để giúp xác thực người dùng). Nếu người dùng OK, có tài khoản trong database thì nó mới vào tiếp controller. Thì thằng controller này mới cho tạo bài post, và nó phản hồi lại route -> route phản hồi lại server -> server phản hồi lại client -> client sẽ thấy được bài post của mình

Hình ảnh minh họa: 🌈

![middleware](image-25.png)

- Cũng tương tự đó: khi người dùng (client) đăng kí người dùng, người ta sẽ gửi (request) các thông tin như: email, số điện thoại,...

👉 Thì nó sẽ vào route

👉 và nó kiểm tra thông tin có đạt yêu cầu hay không (như là: có đủ kí tự hay không, mật khẩu có đúng định dạng hay không...)

👉 Thì sau đó nó sẽ vào middleware kiểm tra các yêu cầu đó (email đúng định dạng, mật khẩu đúng yêu cầu,...)

👉 Sau đó nó sẽ vào thằng controller để cho người ta đăng kí

👉 và nó sẽ vào database để lưu các thông tin vào đó

👉 cuối cùng nó sẽ trả về thằng client

Hình ảnh minh họa: 🌈

![middleware](image-26.png)

✅ Bởi vậy thằng `middleware` này nó rất quan trọng, nó nằm giữa thằng request và thằng response

✅ Nó sẽ ứng dụng vào trong các ứng dụng thực tế như: đăng kí, đăng nhập, tạo bài post, xác thực người dùng,...

✅ Nó ứng dụng vào trong các ngôn ngữ khác nhau như là: php, c#, java,...

---

**Hãy tìm hiểu về `CORS` và `Body Parse`:**

- `CORS` này nó giúp chúng ta kết nối front-end và back-end
- Cụ thể là khi mà front-end (reactjs) yêu cầu đến server (nodejs) thì `CORS` này nó cho phép client nói chuyện được với server

- `Body Parse` là 1 middleware
- Nó có tác dụng, khi người dùng nhập email, password, name,... thì làm sao server nó đọc được mấy thứ đó. Nó sẽ đọc được, nhưng phải thông qua thằng `body parse` để chuyển thành dạng `object`, và cho chúng ta truy cập vào từng phần tử trong đó. Thì đó là các dụng của body parse
- Tóm lại: cứ cái gì liên quan đến, khi mà người dùng gửi dữ liệu hoặc cái input vào cái server thì thằng `body parse` nó sẽ chuyển đổi thành các `object` để cho chúng ta làm việc với các phần tử trong object đó

**Tổng kết CORS và Body Parse:**

✅ CORS cho phép front-end giao tiếp với back-end

✅ Body parse dùng để chuyển đổi dữ liệu của người dùng thành object. Để từ đó server dễ dàng thao tác với các thuộc tính trong đó

---

> Setup structure folder (config, middleware, route, controller, model,...)

![task 4 and 5](image-28.png)

---

> Process login, register (Quy trình đăng ký, đăng nhập) 🔑

![Process Login, Register](image-29.png)

**- Quy trình đăng ký: 🎦**

- Khi người dùng gửi yêu cầu đến server (ví dụ người dùng nhập name: duynghia, email: duynghia@gmail.com), những dữ liệu đó được gửi lên server. Server lúc đó validate các thông tin đó (email có bị trùng với email trong database không, password có đủ ký tự không,...).

- Sau khi mà nó validate xong thì nó tiến hành hash (mã hóa) password đó, rồi sau đó nó mới lưu vào database. Mục đích bảo hóa password đó là nó bảo mật tài khoản người dùng. Khi mà người quản trị website vào database xem thì họ sẽ không thấy được cái password của user đó (vì password đã được mã hóa rồi).

- Tiếp theo đó khi lưu người dùng thành công, thì sẽ tạo tiếp 1 cái token key.

- Token key có nghĩa là:

  - Ví dụ: khi mình đi thuê nhà, khi mình thuê nhà thành công (lưu data vào database thành công) thì chủ nhà sẽ đưa cho bạn 1 cái chìa khóa (key). Mục đích đưa chìa khóa để làm gì? Mục đích để lần sau vào cái nhà thuê này, anh lấy chìa khóa đó anh mở cửa ra là được, tôi (chủ nhà) không cần phải đến để đưa chìa khóa anh nữa. Tóm lại, khi anh đặt nhà thành công thì tôi đưa luôn cái chia khóa cho anh luôn

- Trong ngữ cảnh development thì key này, có nghĩa là token key. Mà bên server đã tạo cho client (user) sử dụng

- User được lưu token key ở local Storage ở trong browser (trình duyệt).

- Mục đích để lưu trong local storage để làm gì? Để khi các bạn tạo bài post, thì bạn phải có 1 cái key, thì nó sẽ lấy cái key ở ngay trong local storage ở trong browser và nó gửi cái request. Trong cái request thì nó sẽ đưa cái token vào trong request header này. Và ngay lúc đó bên back-end nó sẽ verify cái token này. Nếu nó xác nhận cái token đó OK ĐÚNG, và tôi cho phép anh tạo cái bài post

- Tóm lại: 🔥

  - Đầu tiên khách hàng đăng ký, người ta đưa những thông tin như (name, email, password,...) vào. Sau đó server kiểm tra xem (validate) có đủ tiêu chuẩn không. Nếu đủ tiêu chuẩn thì nó hash password, và nó lưu trong database

  - Lưu xong thì nó bắt đầu tạo cái token key gửi về cho người dùng, người dùng sẽ lưu trong cái local storage. Và trong những lần request sau, như là tạo bài post thì nó chỉ việc gửi cái token này vào trong cái request header và bên server xác nhận nếu đúng thì nó sẽ cho tạo bài post

**- Quy trình đăng nhập: 🎦**

- Tương tự, khi mà người dùng đăng nhập:

- Thì người dùng cũng gửi cái request điền thông tin (email, password) vào rồi gửi cho server. Bên server nó validate kiểm tra OK THÔNG TIN ĐÚNG.

- Sau khi nó kiểm tra xong thì nó sẽ compare (so sánh) password. Có nghĩa là nó so sánh password đã lưu trong database với password khi người dùng nhập vào ô input.

- Sau khi mà nó so sánh xong, nó thấy password nhập vào và password đã hash trong database TRÙNG NHAU thì nó tiến hành tạo cái token key cho người dùng. Và cái token key đó được lưu vào trong local storage.

- Trong mỗi lần request sau đó, ví dụ như là tạo bài post, thì nó chỉ cần gửi cái token này vào cái request header và sau đó server nó verify. Sau khi server verify thành công thì nó sẽ tiến hành tạo bài post

![Process Login](image-30.png)

---

> Trong bài học hôm này (Video #13), chúng ta sẽ tìm hiểu về MongoDB

![MongoDB Schema](image-31.png)

![Rule Schema Validation](image-32.png)

- Schema là cấu trúc của bộ khung mà chúng ta lưu dữ liệu vào trong database

- Ví dụ:

- Cấu trúc của User thì có:

  - name, email, password
  - Ngoài ra thì có thêm Id, mà Id nó tự động tạo bởi mongoseDb, nên chúng ta không cần tạo nữa

- Schema validation nó quy định các quy chế, như là: cấu trúc dữ liệu (string), unique (true,false), trim,...

- timestamps: nó giúp cho mongose tự động tạo 2 cái thuộc tính createdAt (ngày bắt đầu tạo), updatedAt (ngày cập nhật dữ liệu)

---
