# [JavaScript chuyên sâu ] - Xử lý bất đồng bộ - phần 2: Event loop trên browser và Nodejs

Phần 2 trong nội dung xử lý đồng bộ và bất đồng bộ của JavaScript trên hai môi trường browser và nodejs. Video mô tả sự giống và khác nhau của cơ chế xử lý bất đồng bộ trên trình duyệt và trên run time xử lý back-end nodejs. Các API khác nhau của Nodejs và đặc thù của browser sẽ giúp chúng ta xử lý các tác vụ tương ứng.

Nội dung của video rất dài và có thể nói, là toàn diện nhất hiện nay về event loop trên browser và nodejs. Những vấn đề phức tạp như các phase của evemt loop trên Nodejs, sự khác biệt giữa tác vụ microtask và tác vụ macrotask sẽ được trình bày đầy đủ cả lí thuyết và ví dụ cụ thể.

Chúng ta sẽ tìm hiểu lí do vì sao JavaScript là ngôn ngữ single-threaded đơn luồng, nhưng lại xử lý rất tốt các tác vụ đa luồng. Bản chất của JavaScript có thể blocking các tác vụ I/O, nhưng nhờ cơ chế xử lý bất đồng bộ, chúng ta dễ dàng scale up nâng cấp mở rộng hệ thống, cân bằng tải (trong trường hợp backend với Nodejs).

---

![alt text](image-17.png)
![alt text](image-18.png)

- Về cơ bản thì JavaScript nó không chạy bất đồng bộ được.

- Nếu nó chạy được thì nó phải nhờ vào cái môi trường của nó (`browser`) thì mới có thể chạy được. Môi trường đấy nó sử dụng môi trường `libevent`.

- Còn trên `NodeJS` thì nó sử dụng thư viện `libuv`.

- Còn trên `deno` thì chạy `Tokio`

- **Lưu ý:** NodeJS nó chỉ là môi trường runtime thôi. Ngoài NodeJS thì vẫn còn những môi trường khác

---

# Phân biệt giữa Browser và NodeJS

![alt text](image-19.png)

- V8 nó biên dịch mã JavaScript thành mã máy
- Task Queue nó là những hành động, trong đó có: Micro Task, Macro Task

---

# Trong bài này thì chúng ta tập trung vào kiến thức `Event Loop` trong JavaScript

![alt text](image-20.png)

Độ ưu tiên khi có các task trong Web API -> sau khi nó xử lý xong -> và sau đó nó sẽ render ra màn hình cho user

👉 Rendering Queue (Browser) 👉 Micro Task 👉 Macro Task

Về cơ bản thì trong những trường hợp mình gặp thì ít khi gặp trường hợp `Rendering Queue` (Browser). Chúng ta thường xuyên phải xử lý `Micro Task` và `Macro Task` là nhiều nhất

---

# Các ví dụ cơ bản về Event Loop (code đồng bộ và bất đồng bộ)

1. Ví dụ 1

![alt text](image-21.png)

Đây là ví dụ của file `script_1.js`

![alt text](image-22.png)

Trong callstack thì nó thực thi theo phương pháp LIFO (Last In First Out -> Vào sau ra trước)

Thì code chạy tới đoạn có setTimeout thì callstack sẽ chuyển nó qua Web API. Khi mà callstack trống (không còn task nào thực thi nữa) thì lúc đó Web API sẽ chuyển setTimeout đó qua bên callstack -> và thực hiện nó.

setTimeout luôn thực hiện cuối cùng

2. Ví dụ 2

![alt text](image-23.png)

- Đây là thứ tự code chạy trong file `script_2.js`

![alt text](image-24.png)
![alt text](image-25.png)
![alt text](image-26.png)
![alt text](image-27.png)
![alt text](image-28.png)
![alt text](image-29.png)
![alt text](image-30.png)

Tuy 2 cái setTimeout nó vẫn log ra sau dòng log `Sync` nhưng mà cách ta viết code bất đồng bộ nhìn code nó sẽ tối ưu hơn, và thời gian thực thi code bất đồng bộ nhanh hơn xí. Còn nếu chúng ta viết code đồng bộ thì nó sẽ mất nhiều thời gian hơn.

- Đây là thứ tự chạy trong file `script_3.js`

![alt text](image-31.png)
![alt text](image-32.png)
![alt text](image-33.png)
![alt text](image-34.png)

---

# Sự khác biệt giữa Micro Task và Macro Task trên Browser

![alt text](image-35.png)

Code này trong file `script_4.js`

![alt text](image-36.png)

`Micro Task` thực hiện trước, sau đó đó tới `Macro Task`

- `Micro Task` gồm: Promise, queueMicrotask,...(tự tìm hiểu thêm)
- `Macro Task` gồm: setTimeout

---

# Những sự khác biệt giữa các hành động `onClick`

Đây là kết quả khi mình sử dụng method `addEventListener`, thì khi mình bấm `click` thứ tự chạy sẽ là nó code đồng bộ in ra trước, code bất đồng bộ in ra sau --> dễ hiểu đúng không? (nhìn vào mũi tên **màu tím**)

![alt text](image-37.png)

Đây là code sử dụng method `click()`, thì khi mình bấm `click` nó sẽ chạy từ trên xuống dưới lun, code nào mà đồng bộ thì nó sẽ in ra hết, sau đó nó sẽ chạy code bất đồng bộ sau (nhìn vào mũi tên **màu xanh**)

![alt text](image-37.png)

---

# Kiến trúc NodeJS

Kiến trúc của NodeJS
![alt text](image-38.png)

Event Loop trên NodeJS
![alt text](image-39.png)
![alt text](image-40.png)

Event Loop là 1 cái hệ thống quan sát sự thay đổi của các file -> từ đó nó sẽ đưa ra các bước xử lý (đó là khái niệm thôi)

---

# Các API của NodeJS được thiết kế bất đồng bộ

![alt text](image-41.png)
![alt text](image-42.png)
![alt text](image-43.png)

Giải thích Pending callback
![alt text](image-44.png)
![alt text](image-45.png)

---

# Sơ đồ về Event Loop

![alt text](image-46.png)

Trong ảnh này có 4 giai đoạn xảy ra: timer -> pause -> set immediate -> close. Thì trong 4 giai đoạn này thì giai đoạn `pause` sẽ sử dụng pause hệ điều hành để xử lý

---

# Đây là các giai đoạn trong vòng lặp (Event Loop)

![alt text](image-47.png)
![alt text](image-49.png)
![alt text](image-48.png)

- Giai đoạn này, khi mới bắt đầu chạy thì nó sẽ thực hiện 2 nhiệm vụ đó là: `Kiểm tra thời gian block để chờ` và `Xử lý sự kiện trong poll queue`

# Đây là một mô phỏng khác về Event Loop

hình này trông trực quan hơn và dễ hiểu hơn
![alt text](image-50.png)

- **Chú ý:** cái thằng `nextTickQueue` là của thằng NodeJS, còn thằng `microTask` là của thằng V8. Trong Event Loop thì 2 thằng này có độ ưu tiên cao hơn, khi thằng này

- Khi `timer` nó gọi xong thì nó lập tức gọi qua `nextTickQueue`, xong `nextTickQueue` thì nó chạy qua `microTaskQueue`. Đấy, tuần tự của nó là như thế, chứ không phải như này nhé (khi `timer` chạy xong thì nó chưa chạy qua `I/O Cycle` đâu -> cái này nó không phải chạy như thế)

- Nên nhớ là khi mà 2 thằng đó xuất hiện trong queue thì nó luôn luôn đứng đầu trong queue -> Nó luôn có sự ưu tiên cao nhất

---

# Sự khác biệt giữa Micro Task và Macro Task

![alt text](image-51.png)
![alt text](image-52.png)
![alt text](image-53.png)
![alt text](image-54.png)
![alt text](image-55.png)

---

# Các ví dụ ở mỗi version khác nhau của NodeJS

![alt text](image-56.png)

Đây là dụ rất hay về sử lý các cái phase (giai đoạn) của NodeJS và các phase của Event Loop
![alt text](image-57.png)

Code này trong file `node6.js`
![alt text](image-58.png)

---

# Thread Pool

![alt text](image-59.png)
![alt text](image-60.png)

---

# Đây là video có ví dụ rất hay -> bạn nên xem qua

![alt text](image-61.png)
![alt text](image-62.png)

---

# Best Practices

![alt text](image-63.png)

- Tránh các tác vụ lặp đi lặp lại
- Chúng ta nên viết đồng bộ và bất đồng bộ riêng -> không nên viết chung
- không nên gọi quá nhiều nextTick. Bởi vì gọi theo kiểu recursive thì có thể khiến block I/O này, làm cho nó không truyền qua được cái key loop tiếp theo
- Nếu chúng ta xử lý các tác vụ liên quan đến fs hay là crypto -> thì chúng ta nên cân nhắc tăng kích cở `UV_THREADPOOL_SIZE` (cái này có sẵn trong JavaScript) nếu cần
- Nên cẩn thận với những file JSON có kích cở lớn -> thời gian và tốc độ xử lý nó gặp vấn đề (nên tính toán trước khi sử dụng)
- Kiểm soát Event Loop nhờ những cái package mà nó giúp cho chúng ta theo dõi cái thời gian hoặc tốc độ xử lý -> nó tính size bao nhiêu đó, mà nó sẽ giúp tốc độ xử lý code của chúng ta

---

# Tài liệu tham khảo

![alt text](image-64.png)

---

# Những bình luận hay trong video

![alt text](image.png)

![alt text](image-1.png)
-> Link code trong video tác giả đã xóa code rồi, mình vô không thấy code nữa

![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)

Đây là phần bình luận dài nhất trong video
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)

Phần này thảo luận về khi ta chạy code JavaScript thì trình biên dịch V8 sẽ dịch ra code C++...và từ đó trình duyệt sẽ dịch code từ C++ ra kết quả
![alt text](image-12.png)

Phần này hỏi về Event Loop trong NodeJS
![alt text](image-13.png)
![alt text](image-14.png)
![alt text](image-15.png)
![alt text](image-16.png)
