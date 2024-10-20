# Bài này chúng ta học về: Javascript DOM - #19 - Một số ứng dụng thực thế thao tác với HTML Attributes

### Thay đổi Style trang web bằng JavaScript

Đoạn mã dưới đây cho phép bạn thay đổi style của trang web bằng cách chọn giữa hai tập tin CSS (`css1.css` và `css2.css`) thông qua JavaScript.

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="css1.css" id="styleChange">
</head>
<body>
  <button onclick="Changestyle('css1.css')">Đỏ</button>
  <button onclick="Changestyle('css2.css')">Xanh</button>
  <!-- Nút nhấn để chọn style -->
  
  <script src="yourJavaScriptFile.js"></script>
</body>
</html>
```

## JavaScript (`yourJavaScriptFile.js`):

```js
var changeStyle = document.querySelector('#styleChange');

function Changestyle(style){
  changeStyle.setAttribute('href', style);
}
```

- Giải thích:
  - Trang web có hai nút "Đỏ" và "Xanh", mỗi nút kích hoạt hàm `Changestyle` với tên của tập tin CSS tương ứng.
  - Hàm `Changestyle` thay đổi thuộc tính `href` của thẻ link CSS, từ đó áp dụng style mới cho trang web.