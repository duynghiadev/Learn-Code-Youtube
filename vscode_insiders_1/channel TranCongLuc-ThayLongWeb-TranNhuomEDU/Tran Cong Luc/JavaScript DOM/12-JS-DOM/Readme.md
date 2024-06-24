# Bài này chúng ta học về: Javascript DOM - #28 - Giải bài tập vận dụng Javascript DOM

Qua bài này mình học được

# Học về Truy Xuất và Tác Động Đến Phần Tử Thứ N bằng `nth-child(n)`

## Truy Xuất và Tác Động CSS Cho Phần Tử Thứ 3

```html
<div>
  <a>demo 1</a>
  <a>demo 2</a>
  <a>demo 3</a>
  <a>demo 4</a>
  <a>demo 5</a>
</div>
```

```css
/* Truy xuất và tác động CSS cho phần tử thứ 3 */
a:nth-child(3) {
  color: pink;
}
```

## Truy Xuất và Thêm Option vào Phần Tử Thứ 3

```html
<div>
  <a>demo 1</a>
  <a>demo 2</a>
  <a>
    demo 3
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </a>
  <a>demo 4</a>
  <a>demo 5</a>
</div>
```

```js
var tag3 = document.querySelector('a:nth-child(3)')

for (var i = 0; i < 3; i++) {
  var option = document.createElement('option')
  option.innerText = i + 1
  tag3.append(option)
}
```

- Trong ví dụ trên, chúng ta học cách sử dụng `nth-child(n)` để truy xuất và tác động CSS cho phần tử thứ 3, sau đó sử dụng JavaScript để thêm thẻ `option` vào phần tử thứ 3. Kết quả sẽ là các thẻ `option` được thêm vào phần tử có thẻ `<a>` thứ 3.

- Như bạn có thể thấy, thẻ `<a>` thứ ba bây giờ chứa ba thẻ `<option>` con, mỗi thẻ con có nội dung tăng dần từ 1 đến 3. Kết quả này phản ánh sự thay đổi trong cây DOM sau khi đoạn mã JavaScript được thực thi.
