# Bài này chúng ta học về: Javascript DOM - #27 - Ứng dụng thực tế với JS DOM, tạo phần tử HTML bằng Javascript

Qua bài này mình học được

# Học về Tạo và Thêm Thẻ trong HTML

## Sử dụng `createElement` và `append` để Tạo và Thêm Thẻ

### Tạo Thẻ bằng `createElement`

```js
// Tạo một thẻ option mới
var option = document.createElement('option')
```

### Thêm Thẻ vào Phần Tử Khác bằng `append`

```js
// Ví dụ: Thêm thẻ option vào thẻ select
var select = document.querySelector('select[name="hoc"]')

for (var i = 0; i < 5; i++) {
  var option = document.createElement('option')
  option.innerText = i + 1 // 0 + 1 = 1
  select.append(option)
}
```

- Trong ví dụ trên, chúng ta sử dụng `createElement` để tạo một thẻ `option`, sau đó sử dụng vòng lặp để tạo và thêm 5 thẻ `option` vào thẻ `select`. Mỗi thẻ `option` sẽ có nội dung tăng dần từ 1 đến 5.

- Kết quả HTML sẽ là:

```js
<select name='hoc'>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
</select>
```
