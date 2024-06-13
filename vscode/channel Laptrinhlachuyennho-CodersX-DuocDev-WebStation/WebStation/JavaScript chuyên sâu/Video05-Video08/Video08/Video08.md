# [ JavaScript chuyên sâu ] - Xử lý bất đồng bộ - phần 3 - Promise

Promise có sẵn trong javasript, giúp viết code bất đồng bộ dễ dàng hơn. Sức mạnh của promise chính là khả năng nối các tác vụ bất đồng bộ và trả về kết quả theo mong muốn.

Hiểu biết về Promise sẽ giúp chúng ta nắm được bản chất của việc xử lý bất đồng bộ khi dùng cú pháp ES7 async - await.

---

![alt text](images/image-3.png)
![alt text](images/image-4.png)

# Promise là gì

![alt text](images/image-5.png)

- Chúng ta phải hiểu là `Promise` nó khác so với các `Promise` là library nó dựa trên cái `Promise` để nó có thể giúp chúng ta viết code tốt hơn. Thì chúng ta hiểu `Promise` là cái chuẩn và có rất nhiều cách mà người ta implement và viết những cái thư viện dựa trên cái chuẩn đấy.

- Thông thường, bây giờ chúng ta có thể sử dụng `Promise` trên browser, NodeJS của JavaScript mà chúng ta chưa cần sử dụng library. Chúng ta có thể sử dụng thư viện `q`, `bluebird`,...để có thể viết code tốt hơn. Tất nhiên, hiện nay nó có rất nhiều sự lựa chọn.

- Hiện nay thì nó có rất nhiều sự lựa chọn, có 1 đặc điểm đó là cái NodeJS thì nó bắt đầu chuyển hóa cái Pattern từ dạng callback (như hàm `readFile`) và chúng ta có thể sử dụng các thư viện được NodeJS thêm vào để có thể `Promise` hóa. Tức là biến các code theo kiểu là callback ngày xưa -> và trở thành `Promise` để chúng ta sử dụng dễ dàng hơn.

- Có 1 điều nên nhớ là: khi chúng ta nói đến `Promise`, thì chúng ta nói tới việc dùng nó để xử lý code bất đồng bộ theo kiểu đồng bộ. Nghĩa là chúng ta có thể lấy được thứ tự xuất hiện của tất cả data. Thì hiện nay, chúng ta thường sử dụng `async/await` để có thể viết bất đồng bộ 1 cách dễ dàng hơn -> bản chất của nó thì cũng dựa trên `Promise` mà thôi.

- Promise thì chúng ta cần phải nhớ 1 điều nữa là: các tác vụ mà chúng ta sử dụng Promise thì đó là các tác vụ bất đồng bộ -> thì nó thuộc nhóm `micro task`, thì nó sẽ được ưu tiên hơn những tác vụ bất đồng bộ nhưng mà thuộc nhóm `macro task` (như là timer, setTimeout,...)

![alt text](images/image-5.png)

---

# Tại sao chúng ta lại dùng Promise?

Đây là các ví dụ đơn giản để giải thích lý do chúng ta phải sử dụng Promise

![alt text](images/image-6.png)

Các bạn hình dung như này cho dễ hiểu về cơ chế promise này:

-> Đây là ví dụ: Bây giờ tôi phải nấu cơm, có 3 công việc cần phải làm đó là luộc trứng, nấu cơm, luộc thịt.

**Cách 1: Cách này quá tệ**

-> Đây là cách stupid: bắt cơm lên -> đứng nhìn đợi cơm chín -> sau khi cơm chín thì mình đi nấu nước sôi -> nước sôi xong rồi bỏ trứng vào -> đứng nhìn đợi trứng chín -> sau khi trứng chín thì đi luộc thịt

**Cách 2: Áp dụng promise vào nấu cơm**

-> Đây là cách thông minh hơn tí -> bắt cơm lên -> trong khoảng thời gian cơm chín thì mình đi nấu nước xôi để luộc trứng -> bắt nước xôi luộc trứng lên -> trong khoảng thời gian nước xôi thì mình đi luộc thịt -> luộc thịt xong thì cơm vừa chín -> xong

Đấy là cái ví dụ rất dễ hiểu trong cuộc sống của chúng ta

Nhưng mà khi làm việc gì thì cũng có 2 trạng thái đó là `resolve` (thành công) và `reject` (thất bại). Nếu thành công thì nó sẽ trả về `resolve`, còn thất bại thì sẽ trả về `reject`

---

# Các ví dụ về Promise

đây là code trong file `promise.js`

![alt text](images/image-7.png)

- Đoạn code này tổng thể của nó chạy là chỉ có 3 giây thôi (chứ không phải 6 giây nhé). Do chúng ta sử dụng Promise, code bất đồng bộ. Khi mà p1 nó đợi 3 giây, thì p2 p3 vẫn được thực thi luôn. Tổng thời gian nó đợi là 3 giây

- Nếu mà chúng ta code đồng bộ (code chạy tuần tự) thì code chạy sẽ tốn 6 giây

---

đây là ví dụ trong file `callback.js`

Trong code JavaScript thì nó sẽ ưu tiên xử lý code đồng bộ trước, rồi sau đó nó mới thực thi các đoạn code bất đồng bộ. Code bất đồng bộ chỉ xuất hiện khi các code đồng bộ chạy xong. Trong code bất đồng bộ thì nó ưu tiên về `macro task`, `micro task` -> thì `micro task` sẽ được chạy trước

![alt text](images/image-8.png)

Trong JavaScript thì 1 hàm có thể được truyền vào hàm khác như 1 tham số -> đó được gọi là `callback`

Nhìn vào ví dụ đó. Chúng ta có 2 cách truyền hàm vào tham số: 1 là truyền callback vào hàm, 2 là viết callback trực tiếp vào hàm

Đây là các pattern rất là quen thuộc của NodeJS và JavaScript. Nếu như chúng ta chưa quen thì rất khó hình dung được về những cái chúng ta viết callback ở trong promise. Bởi vì chúng ta dùng `Promise` để fix `callback hell`, nhưng mà chúng ta vẫn sẽ sử dụng callback pattern. 2 cái khái niệm này nó khác nhau đó nhé (cần tìm hiểu thêm)

---

đây là ví dụ trong file `function constructor.js`

![alt text](images/image-9.png)

Chúng ta nên biết là class của JavaScript thực chất nó là function. Trên cơ sở function đó thì ta có thể tạo được cái object hoặc là tạo được các instance dựa trên function đó, thay vì trên class

Trong JavaScript thì chúng ta có 2 cách tạo class

---

đây là ví dụ trong file `prototype promise.js`

![alt text](images/image-10.png)

Để hiểu được prototype của JavaScript thì chúng ta cần phải nắm được cái khái niệm method prototype và state method. Thế thì trong promise thì nó có 2 cái nhóm method khác nhau và chúng ta cần phải nắm được sự khác biệt đó để có thể sử dụng nó

🎯 Bữa sau đọc lại file này thì nên tìm hiểu về `function prototype` và `function static`

---

![alt text](images/image-11.png)

🎯 Bữa sau đọc lại file này thì nên tìm hiểu về `promise prototype method` và `promise static method`

---

đây là ví dụ trong file `promise_1.js`

![alt text](images/image-12.png)

Trong ví dụ này chúng ta kiểm tra biến job có đúng với điều kiện mà chúng ta cần kiểm tra hay không. Nếu đúng thì nó sẽ thực thi hàm `then()` -> và nó sẽ thực thi hàm `resolve()` ngay lập tức. Còn thất bại thì nó sẽ thực thi hàm `catch()` -> và nó sẽ thực thi hàm `reject()`. Còn hàm `finally()` thì dù nó có `success` hay `failed` đi chăng nữa thì nó vẫn sẽ thực thi

![alt text](images/image-13.png)

`new Promise` là 1 `function constructor` (hoặc class) có sẵn. Nó nhận vào 2 hàm callback đó là `resolve` và `reject`. Promise là nó sẽ fix trường hợp mà chúng ta gặp `callback hell` nhưng thật chất nó dựa vào `callback pattern`, bởi vì `callback pattern` là 1 dạng rất là đặc trưng của JavaScript

Trong callback đó có `resolve` và `reject` -> và khi thực thi thì nó sẽ thực thi chỉ 1 cái mà thôi. 1 là `resolve` -> nếu không phải là `resolve` -> vậy thì chạy `reject` (Lưu ý: không có trường hợp chạy cả 2 hàm callback)

![alt text](images/image-14.png)
![alt text](images/image-15.png)
![alt text](images/image-16.png)
![alt text](images/image-17.png)

Trong promise nó có sẵn phương thức như là: `then()`, `catch()`, `finally()`
Trong `then()`, `catch()`, `finally()`, thì luôn luôn phải là 1 `callback`

![alt text](images/image-18.png)

trong callback thì luôn luôn nhận vào 1 tham số (`parameter`), nếu như chúng ta có nhiều dữ liệu thì sao? thì chúng ta phải truyền vào 1 `object` hoặc 1 `array`

![alt text](images/image-19.png)

Chúng ta sử dụng `catch()` để bắt lỗi, còn `then()` để nhận kết quả

---

Một ví dụ khác trong file `promise_2.js`

![alt text](images/image-20.png)
![alt text](images/image-21.png)
![alt text](images/image-22.png)
![alt text](images/image-23.png)

Đây là sự phân biệt khi chúng ta dùng `callback` để bắt lỗi và dùng `catch()` để bắt lỗi

![alt text](images/image-24.png)
![alt text](images/image-25.png)

Sự khác biệt giữa dùng `callback` và `catch()` để bắt lỗi

Tuy nhiên 2 thằng này được coi là tương đương nhau nhưng mà có 1 trường hợp nó khác nhau

![alt text](images/image-26.png)

---

đây là ví dụ khác

![alt text](images/image-27.png)

Nếu như chúng ta dùng `reject` thì vẫn bắt được lỗi, còn dùng `resolve` thì chỉ bắt được lỗi chỗ `catch()` mà thôi

---

# Phân biệt sự khác nhau giữa các `return` trong callback của `then()`

![alt text](images/image-28.png)
![alt text](images/image-29.png)

---

# Phân biệt return hàm và return value/data trong `then()`

![alt text](images/image-30.png)
![alt text](images/image-31.png)

---

# Bọc promise trong hàm để tái sử dụng

Đây là 1 ví dụ khác thực hiện bọc promise để có thể tái sử dụng

![alt text](images/image-33.png)

---

# Ví dụ về Promise và việc quản lý nhiều tác vụ bất đồng bộ

đây là code trong file `promise_dependency.js`

![alt text](images/image-34.png)

---

# Đây là ví dụ nói về trường hợp callback hell

Ví dụ này mình sẽ tìm hiểu về vấn đề callback hell và từ đó mình sẽ transfer code về dạng promise

Đoạn code này trong file `callback_hell_to_promise_1.js`

Trong đoạn code này gặp phải trường hợp `callback hell` các bạn khi code thì nhớ đừng code như này

![alt text](images/image-35.png)

Còn code này là mình chuyển từ code `callback hell` sang `promise`

![alt text](images/image-36.png)

Sau khi chuyển đổi code thành Promise thì nhìn code rất dễ chịu và dễ nhìn

Còn 1 cách khác khi viết là sử dụng cách này, truyền vào 1 object (nằm trong file code `callback_hell_to_promise_2.js`)

![alt text](images/image-37.png)
![alt text](images/image-38.png)
![alt text](images/image-39.png)

---

Một ví dụ khác, code này trong folder `Example`

![alt text](images/image-40.png)

Như vậy thì có 3 cách viết return trong hàm callback của then

Trong 3 tấm ảnh dọc đó thì mọi người nên viết theo tấm ảnh ở giữa. Bởi vì viết như thế làm cho mình dễ đọc code hơn và cảm thấy dễ chịu. Còn nếu sử dụng `arrow function` để viết thì phải hiểu rõ cách hoạt động

![alt text](images/image-41.png)

Đây là tấm hình được tác giả nào đó thảo luận trên forum `StackOverFlow`

---

# Tóm tắt về việc xử lý dữ liệu trong `then()`

![alt text](images/image-42.png)

---

# Tìm hiểu về 6 method của Promise

![alt text](images/image-43.png)

---

# Lưu ý về các method trong `Promise`

- `Promise.race([])`: Bất kì một resolve/reject sớm nhất => Okey
- `Promise.all([])`: Tất cả các promise done thì mới => Okey
- `Promise.allSettled([])`: Trả về kết quả của tất cả promise, dù thành công hay thất bại thì nó cũng trả về hết (trả về 1 mảng)

---

# Truyền data giữa các promise

Với phương pháp này thì chúng ta dùng lại data ở các `then()` trước đó

![alt text](images/image-44.png)

Nếu chúng ta hiểu được `promise` thì cũng sẽ hiểu được `async/await`

---

# Đây là 1 ví dụ khác về callback hell -> được chuyển thành promise trong NodeJS

Code này trong folder `fs callback`

![alt text](images/image-45.png)
![alt text](images/image-46.png)

---

# Những cái ghi chú quan trọng

![alt text](images/image-47.png)

- Bài viết tham khảo:

  - [Bài viết 1](https://hackernoon.com/should-i-use-promises-or-async-await-126ab5c98789)

- `promise` chính là `async/await`. Mà `async/await` là chính là dạng `single syntax` của JavaScript như chúng ta xử lý code bất đồng bộ dễ chịu hơn. Các bạn nếu muốn nắm được `async/await` thì trước tiên phải nắm được `promise`
- Viết 1 callback và truyền vào `then`, `catch`, `finally`

---

# Những bình luận hay trong video

![alt text](images/image.png)
![alt text](images/image-1.png)
![alt text](images/image-2.png)
