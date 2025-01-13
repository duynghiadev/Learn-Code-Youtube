### Apply Method

- Phương thức này cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng

### Ví dụ 1:

### Ví dụ 2: (Function borrowing)

### Ví dụ 3: (Extends)

### Giống nhau

- Cú pháp truy cập:
  + Ví dụ: fn.bind(), fn.call(), fn.apply()
- là các methods được kế thừa từ Function.prototype

### Khác nhau

- Các đối số và cách hoạt động

/* 
  function fn(){}
    /*
      Bind Method:
        - Trả về hàm mới với `this` tham chiếu với `thisArg`
        - Không thực hiện gọi hàm
        - Nếu được bind kèm `arg1, arg2,...` thì các đối số này sẽ được ưu tiên hơn
    */
  const newFn = fn.bind(thisArg, arg1, arg2, ...);
  newFn( arg1, arg2, ... );
    /*
      Call Method:
        - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
        - Nhận các đối số cho hàm gốc từ `arg1, arg2,...`
    */  
  fn.call(thisArg, arg1, arg2, ...);
    /*
      Apply Method:
        - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
        - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]` 
    */
  fn.apply(thisArg, [arg1, arg2, ...]);
*/