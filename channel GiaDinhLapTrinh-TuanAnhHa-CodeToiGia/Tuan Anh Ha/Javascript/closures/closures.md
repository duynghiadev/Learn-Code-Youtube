## Tìm hiểu về Closure trong JavaScript

- Closure là một khái niệm quan trọng trong ngôn ngữ lập trình JavaScript. Closure xảy ra khi một
  hàm được định nghĩa trong một hàm khác và nó có thể truy cập các biến của hàm ngoài cùng (hàm cha)
  dù hàm cha đã thực thi xong. Điều này có nghĩa là closure giữ lại môi trường biến của nó, ngay cả
  khi hàm cha đã kết thúc.

- Dưới đây là một ví dụ đơn giản để minh họa closure trong JavaScript:

```js
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // innerFunction có thể truy cập outerVariable
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am outside!
```

- Trong ví dụ trên, `innerFunction` là một closure vì nó được định nghĩa trong `outerFunction` và có
  thể
  truy cập biến `outerVariable` của `outerFunction` ngay cả khi `outerFunction` đã thực thi xong.

- Một số điểm quan trọng về closure:

1. Closure lưu trữ môi trường biến: Closure giữ lại tham chiếu đến biến bên ngoài của nó, do đó, các
   biến này vẫn có thể được truy cập ngay cả sau khi hàm cha đã kết thúc.

2. Closure là một cách để tạo private variables: Các biến trong hàm cha không thể truy cập trực tiếp
   từ bên ngoài, nhưng closure có thể truy cập chúng, tạo ra một cơ chế để tạo private variables.

3. Closure là một cơ chế quan trọng trong JavaScript: Nó được sử dụng rộng rãi trong việc xử lý sự
   kiện, promises, callbacks, và nhiều mô hình lập trình khác trong JavaScript.

- Hiểu về closure là quan trọng để viết mã JavaScript hiệu quả và linh hoạt.

## Cho ví dụ cơ bản về closure

- Dưới đây là một ví dụ cơ bản về closure trong JavaScript:

```js
function outerFunction(outerVariable) {
  // innerFunction là một closure
  function innerFunction(innerVariable) {
    console.log(outerVariable + ' ' + innerVariable);
  }

  return innerFunction;
}

// Tạo một closure với outerVariable là 'Hello'
const closureExample1 = outerFunction('Hello');

// Tạo một closure với outerVariable là 'Hi'
const closureExample2 = outerFunction('Hi');

// Gọi các closure với innerVariable
closureExample1('World'); // Output: Hello World
closureExample2('Universe'); // Output: Hi Universe
```

- Trong ví dụ này, `outerFunction` nhận một tham số là `outerVariable` và trả về một
  hàm `innerFunction`. `innerFunction` là một closure vì nó được định nghĩa trong `outerFunction` và
  có thể truy cập biến `outerVariable` của nó.

- Khi chúng ta tạo hai closure khác nhau bằng cách gọi `outerFunction` với các giá trị khác nhau cho
  `outerVariable`, chúng ta có hai closure độc lập với nhau. Mỗi closure có thể duy trì một bản sao
  của môi trường biến của nó.

- Khi chúng ta gọi các closure với các giá trị khác nhau cho `innerVariable`, chúng ta thấy rằng mỗi
  closure vẫn giữ lại tham chiếu đến `outerVariable` của mình, tạo ra các kết quả khác nhau khi kết
  hợp với `innerVariable`.

## Cho ví dụ nâng cao về closure

- Dưới đây là một ví dụ nâng cao về closure trong JavaScript, trong đó closure được sử dụng để tạo
  một hàm con có thể thực hiện các bước cụ thể trong một chuỗi công việc:

```js
function createTaskExecutor(taskName) {
  // Biến local được chia sẻ qua closure
  let taskStatus = 'Not started';

  // Hàm closure để thực hiện công việc và cập nhật trạng thái
  function taskExecutor() {
    console.log(`Task "${taskName}" is currently ${taskStatus}.`);
    taskStatus = 'In progress';

    // Simulate asynchronous task
    setTimeout(function() {
      console.log(`Task "${taskName}" is now completed.`);
      taskStatus = 'Completed';
    }, 2000);
  }

  return taskExecutor;
}

// Tạo một closure cho công việc "Download Data"
const downloadTask = createTaskExecutor('Download Data');

// Tạo một closure cho công việc "Process Data"
const processTask = createTaskExecutor('Process Data');

// Thực hiện các công việc
downloadTask(); // Output: Task "Download Data" is currently Not started.
// (Sau 2 giây) Task "Download Data" is now completed.

processTask();  // Output: Task "Process Data" is currently Not started.
// (Sau 2 giây) Task "Process Data" is now completed.

// Mỗi closure giữ lại trạng thái của nó, không ảnh hưởng đến closure khác
```

- Trong ví dụ này, `createTaskExecutor` là một hàm chấp nhận một tham số `taskName` và trả về một
  closure là `taskExecutor`. Mỗi khi `taskExecutor` được gọi, nó in ra trạng thái hiện tại của công
  việc và sau đó mô phỏng việc thực hiện công việc bằng cách sử dụng `setTimeout`.

- Khi chúng ta tạo hai closure khác nhau cho các công việc khác nhau (`downloadTask`
  và `processTask`), mỗi closure giữ lại trạng thái của nó thông qua biến `taskStatus`, mà không ảnh
  hưởng đến closure khác. Điều này thể hiện cách closure có thể được sử dụng để tạo các hàm con có
  thể duy trì trạng thái riêng biệt cho mỗi thực thể của chúng.