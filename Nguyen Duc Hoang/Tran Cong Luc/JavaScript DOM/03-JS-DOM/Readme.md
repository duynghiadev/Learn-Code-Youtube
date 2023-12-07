# Bài này chúng ta học về: Javascript DOM - #18 - Thao tác với thuộc tính HTML bằng Javascript

# Học DOM qua ví dụ JavaScript

## 1. Lấy nội dung thuộc tính của thẻ

Để lấy nội dung thuộc tính của một thẻ, sử dụng phương thức `getAttribute()`:

```javascript
// Ví dụ với thẻ div
var a = demo.querySelector('.demo');
var a_Attr = a.getAttribute("money");
console.log(a_Attr); // Kết quả: 'alot'
```

## 2. Thiết lập nội dung thuộc tính của thẻ

Sử dụng phương thức `setAttribute()` để thiết lập nội dung thuộc tính của thẻ:

```javascript
// Ví dụ với thẻ div
var a = demo.querySelector('.demo');
var a_Attr = a.setAttribute("money", 'little');  // **
// Kết quả: <div class="demo" money="little">DEMO</div>
// nếu muốn lấy ra thì thay dòng (**) thành:  a_Array[i].getAttribute('money'); rồi console.log() nó ra là oke
```

## 3. Lấy và Thiết lập đồng thời nhiều thuộc tính

Đầu tiên, sử dụng `querySelectorAll()` để lấy tất cả các thẻ cùng loại, sau đó thực hiện thao tác trên từng thẻ:

```javascript
// Ví dụ danh sách thẻ div có class 'demo'
var a = document.querySelectorAll('.demo');
var a_Array = Array.from(a); // Chuyển về mảng
for (var i = 0; i < a_Array.length; i++) {
    a_Array[i].setAttribute('money', 'little ' + i);
}
// Kết quả:
// <div class="demo" money="little 1">DEMO 1</div>
// <div class="demo" money="little 2">DEMO 2</div>
```


## 4. Phương thức `trim()`

```markdown
Phương thức `trim()
```

Phương thức `trim()` được sử dụng để cắt kí tự khoảng trắng ở hai đầu của chuỗi:

```javascript
var a = "js dom";
var b = a.trim(); 
console.log(b); // Kết quả: 'js dom'
```