# Bài này chúng ta học về: Javascript DOM - #24 - Cách dùng DOM Token List và CSS Style Declaration

Qua bài này mình học được

Đoạn mã của bạn là một mã HTML và JavaScript mô tả cách sử dụng `classList` để thêm và xóa lớp (class), cũng như cách tác động vào các thuộc tính CSS của một phần tử HTML

# Học về `classList` và Tác động vào Style trong JavaScript

## `classList`

- `classList` được sử dụng để quản lý các lớp của một phần tử HTML.
- Nó có thể thay thế cho việc sử dụng `getAttribute` và `split(' ')`.

### Ví dụ:

```html
<div class="abc xyz"></div>
```

```js
var a = document.querySelector('div')

// Cách 1
var b = a.getAttribute('class') // kết quả: 'abc xyz'
b.split(' ') // kết quả: ['abc', 'xyz']

// Cách 2
var b = a.classList // kết quả: b = ['abc', 'xyz', value: 'abc xyz']
```

## Thêm lớp (`Add Class`)

```html
<div class="abc xyz"></div>
```

```js
var a = document.querySelector('div')
a.classList.add('bde')
// Kết quả HTML: <div class='abc xyz bde'></div>
```

## Xóa lớp (`Remove Class`)

```html
<div class="abc xyz"></div>
```

```js
var a = document.querySelector('div')
a.classList.remove('abc')
// Kết quả HTML: <div class='xyz'></div>
```

## Tác động vào Style

```html
<div class="abc">Demo</div>
```

```js
var a = document.querySelector('.abc')
a.style.color = 'red'
a.style.backgroundColor = 'pink'
// Kết quả HTML: <div class='abc' style="color:red; background-color:pink;">Demo</div>
```

## Giải quyết Bài tập Dropdown

```html
<div class="dropdown">demo</div>
<button onclick="toggle()">Click me</button>
```

```js
var a = document.querySelector('.dropdown')
var status = 'click'

function toggle() {
  if (status === 'click') {
    a.classList.add('Open')
    status = 'dbclick'
  } else {
    a.classList.remove('Open')
    status = 'click'
  }
}
```

- Trong ví dụ trên, khi nhấn nút, hàm `toggle` sẽ thêm hoặc xóa lớp 'Open' từ phần tử có class 'dropdown', tạo hiệu ứng mở/đóng dropdown.
