# Bài này chúng ta học về: Javascript DOM - #26 - Cách dùng DOM Navigation, truy xuất Child, Parent & Sibling Element

Qua bài này mình học được

## Học về Truy cập và Sửa đổi Cấu trúc HTML và Nội dung Thẻ

## Truy cập Phần Tử thông qua Các Mối Quan Hệ

### Child (Con)

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```js
var parent = document.querySelector('.parent')
var child = parent.children
```

### Parent (Cha)

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```js
var child = document.querySelector('.child')
var parent = child.parentElement
```

### Sibling (Anh chị em cùng Cha)

```html
<div class="parent">
  <div class="child1"></div>
  <div class="child2"></div>
</div>
```

```js
var parent = document.querySelector('.parent')
var child1 = parent.children
var child2 = child1.nextElementSibling
// hoặc
// var child2 = parent.children;
// var child1 = child2.previousElementSibling;
```

## Lấy và Thiết lập Nội Dung Thẻ

### Lấy và Thiết lập Nội Dung Văn bản (innerText)

```html
<div>Xin chao</div>
```

```js
var di = document.querySelector('div')
var a = di.innerText // Kết quả: Xin chao
di.innerText = 'Hello'
// Kết quả HTML: <div>Hello</div>
```

### Thêm Nội Dung HTML

```html
<div>Xin chao</div>
```

```js
var di = document.querySelector('div')
di.innerHTML = '<p>Hello</p>'
// Kết quả HTML: <div><p>Hello</p></div>
```

- Trong ví dụ trên, chúng ta học cách truy cập phần tử HTML thông qua các mối quan hệ parent, child, anh em cùng parent và cách lấy và thiết lập nội dung của một thẻ.
