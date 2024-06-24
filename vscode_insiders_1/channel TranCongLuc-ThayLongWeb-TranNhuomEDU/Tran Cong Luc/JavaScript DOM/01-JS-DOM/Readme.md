# Bài này chúng ta học về: Javascript DOM - #16 - Truy xuất phần tử HTML bằng Javascript DOM


## Qua bài học này mình học được:
## Tóm tắt bài học:

>## Các cách để truy xuất phần tử trong html

Trong bài học này, chúng ta sẽ tìm hiểu về cách truy xuất các phần tử trong HTML bằng JavaScript DOM. Cụ thể, chúng ta sẽ học về ba cách chính để truy xuất phần tử:

1. **Truy xuất thông qua class:**
  - Sử dụng `getElementsByClassName` để lấy tất cả các phần tử có class tương ứng.
  - Kết quả trả về là một collection, tức là một tập hợp các phần tử HTML có cùng class.

    ```javascript
    document.getElementsByClassName('xxx');
    ```

2. **Truy xuất thông qua id:**
  - Sử dụng `getElementById` để lấy phần tử theo id. Vì id là duy nhất, kết quả trả về là một phần tử duy nhất.

    ```javascript
    document.getElementById('x');
    ```

3. **Truy xuất thông qua tên thẻ:**
  - Sử dụng `getElementsByTagName` để lấy tất cả các phần tử có tên thẻ tương ứng.
  - Kết quả trả về là một collection chứa những phần tử HTML có tên thẻ cần tìm.

    ```javascript
    document.getElementsByTagName('div');
    ```
    
---

>## Phần Collection

**Collection là gì?**

- Gần giống như mảng, collection có thể chứa các phần tử bên trong nó. Do đó, bạn có thể sử dụng phương thức `length` với cú pháp `a.length` (với `a` là kết quả truy xuất). 

- Tuy nhiên, khác với mảng, các phần tử trong collection không chỉ là dữ liệu thông thường (integer, string, Boolean, ...) mà còn có thể là các object (đối tượng). Để hiểu rõ hơn về object, bạn có thể tìm kiếm trên Google.

- Collection có điều gì đặc biệt?

  => Nếu có phương pháp để chuyển collection sang array, thì array có những điều gì đặc biệt? Tại sao chúng ta cần phải chuyển sang array? Đáp án là array cung cấp một loạt các phương thức hỗ trợ thao tác với mảng một cách nhanh chóng.

**Cách chuyển Collection sang Array**

```javascript
// Ví dụ: Chuyển collection có class 'money' sang array
var x = document.getElementsByClassName('money');
var x_array = Array.from(x); // vậy là ta chuyển xong ,giờ ta chỉ search các method thao tác với mảng!! Là ta đã dễ dàng
```

>Finish: xử lí collection rồi!!
