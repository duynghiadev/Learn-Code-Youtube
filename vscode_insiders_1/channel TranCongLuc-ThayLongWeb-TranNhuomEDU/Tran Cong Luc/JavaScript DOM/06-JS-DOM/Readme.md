# Bài này chúng ta học về: Javascript DOM - #20 - Một số ứng dụng thực tế. Giao bài tập Challenge 06

Qua bài này mình học được cách thay đổi style bằng cách thay đổi trực tiếp CSS ứng dụng `setAttribute` để xử lý. Ví dụ:

```html
<div id="demo" style="color:red" onclick="changeStyle()">Màu</div>
```

Muốn chuyển qua màu vàng, ta chỉ cần làm 2 bước: lấy ra và xử lí.

```js
var tagDemo = document.querySelector('#demo')

function changeStyle() {
  tagDemo.setAttribute('style', 'color: yellow;')
}
```

=> Vậy là xong. ✅✅✅

#### Mình có ý tưởng giải bài tập cuối video như thế này:

Ta có các thẻ:

```html
<body style="container xxx">
  …...
</body>
<button onclick="addFrame('show')">Show</button>
<button onclick="addFrame('hide')">Hide</button>
```

Mục tiêu của bài toán là ta set sao cho thẻ `body` khi đã có class 'show' rồi thì ta không chèn thêm class 'show' nữa.

```js
var tagBody = document.querySelector('body') // Đầu tiên ta lấy thẻ ra
var count = 0
var newClass

function addFrame(addClass) {
  // Xử lý khi click nút nhấn
  var oldClass = tagBody.getAttribute('class') // Lấy nội dung thuộc tính class của thẻ body, kết quả sẽ trả về chuỗi 'container xxx'
  // Ta sẽ tách chuỗi này thành mảng các phần tử được ngăn cách bằng khoảng trắng nhờ hàm split

  var oldClass_Array = oldClass.split(' ') // => Kết quả ta được ['container', 'xxx'];

  // Giờ ta chỉ cần check xem mảng đã có phần tử 'show' chưa bằng cách lặp
  for (var i = 0; i < oldClass_Array.length; i++) {
    if (oldClass_Array[i] === addClass) {
      count += 1 // Đếm nếu class đã tồn tại
    }
    if (count > 0) newClass = oldClass // Đã có rồi nên không thêm nữa
    else newClass = oldClass + ' ' + addClass // Chưa có, ta thêm vào

    tagBody.setAttribute('class', newClass) // Cuối cùng ta set thuộc tính là xong rồi
  }
}
```

## Thay Đổi Class của Thẻ Body Bằng JavaScript

#### Tham khảo bài này. Nó cũng liên quan đến bài chúng ta đang học

Trong đoạn mã sau, chúng ta sử dụng JavaScript để thêm hoặc xóa một class từ thuộc tính `class` của thẻ `<body>` khi nhấn nút "Show" hoặc "Hide".

#### HTML:

```html
<body class="container xxx">
  <!-- Nội dung trang web -->
  <button onclick="addFrame('show')">Show</button>
  <button onclick="addFrame('hide')">Hide</button>

  <script src="yourJavaScriptFile.js"></script>
</body>
```

#### JavaScript (`yourJavaScriptFile.js`):

```js
var tagBody = document.querySelector('body')
var count = 0
var newClass

function addFrame(addClass) {
  var oldClass = tagBody.getAttribute('class')
  var oldClass_Array = oldClass.split(' ')

  // Kiểm tra xem class đã tồn tại chưa
  for (var i = 0; i < oldClass_Array.length; i++) {
    if (oldClass_Array[i] === addClass) {
      count += 1
    }
  }

  // Nếu class đã tồn tại, không thêm vào nữa
  if (count > 0) {
    newClass = oldClass
  } else {
    // Nếu class chưa tồn tại, thêm vào
    newClass = oldClass + ' ' + addClass
  }

  // Set thuộc tính class mới cho thẻ body
  tagBody.setAttribute('class', newClass)
}
```

- Giải Thích:

  - Thẻ `<body>` đã có sẵn class "container xxx".
  - Khi nhấn nút "Show" hoặc "Hide", hàm `addFrame` sẽ kiểm tra xem class "show" hoặc "hide" đã tồn tại trong thuộc tính `class` của `<body>` hay chưa.
  - Nếu đã tồn tại, không thêm vào nữa. Nếu chưa, thêm vào.
  - Cuối cùng, set thuộc tính `class` mới cho thẻ `<body>`.

- Điều này giúp người đọc hiểu rõ cách mã hoạt động và cách tích hợp nó vào trang web.
