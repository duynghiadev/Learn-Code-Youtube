# phân biệt tham trị và tham chiếu trong javascript

- Trong JavaScript, tham trị (pass by value) và tham chiếu (pass by reference) đều liên quan đến cách tham số của một hàm được truyền vào và xử lý trong hàm đó.

Khi truyền tham trị vào một hàm, giá trị của tham số được sao chép và truyền vào hàm, do đó giá trị của biến gốc không bị thay đổi bởi hàm. Nói cách khác, hàm chỉ sử dụng bản sao của giá trị đầu vào, không ảnh hưởng đến giá trị gốc. 

🚀 Ví dụ:

```
let num = 5;

function changeNum(x) {
  x = x + 1;
  console.log(x); // 6
}

changeNum(num);
console.log(num); // 5
```

- Trong trường hợp này, biến num không bị thay đổi bởi hàm changeNum vì giá trị của biến num đã được sao chép vào biến x, và biến x chỉ thay đổi giá trị của bản sao đó.

Tuy nhiên, khi truyền tham chiếu vào một hàm, địa chỉ của biến được truyền vào hàm, không phải giá trị của biến. Khi hàm thay đổi giá trị của tham chiếu, giá trị của biến gốc cũng bị thay đổi. 

🚀 Ví dụ:

```
let arr = [1, 2, 3];

function changeArr(x) {
  x.push(4);
  console.log(x); // [1, 2, 3, 4]
}

changeArr(arr);
console.log(arr); // [1, 2, 3, 4]
```

- Trong trường hợp này, biến arr bị thay đổi bởi hàm changeArr vì địa chỉ của biến được truyền vào hàm, và hàm thay đổi giá trị của mảng thông qua địa chỉ đó.

Vì vậy, phân biệt tham trị và tham chiếu là rất quan trọng khi lập trình JavaScript để đảm bảo rằng bạn đang đưa các tham số vào hàm đúng cách và không làm thay đổi giá trị của biến gốc không cần thiết.