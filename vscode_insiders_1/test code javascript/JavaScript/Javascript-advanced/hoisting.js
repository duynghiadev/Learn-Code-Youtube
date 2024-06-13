// 1:
{
  let fullName = "Nguyen Van A";
  console.log(fullName);
}

// 2:
const counter1 = makeCounter();

console.log(counter1()); // what's the output ?

function makeCounter() {
  let counter = 0;
  return increase;
  function increase() {
    return ++counter;
  }
}

// 3: Ví dụ về hoisting
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
// Output: ?
// Giải thích
// Ở đây chúng ta có một IIFE (Biểu thức hàm được gọi ngay lập tức)
// Biến tip sẽ là undefined vì var tip = 10 đã được khai báo bên trong hàm. Biến tip bên trong hàm được hoisted với giá trị mặc định là undefined. Khi thực hiện tính toán với 1 biến có giá trị là undefined thì kết quả trả về sẽ là NaN.
// Nếu chúng ta không khai báo var tip = 10 ở cuối hàm thì đáp án sẽ là "I have $100".
