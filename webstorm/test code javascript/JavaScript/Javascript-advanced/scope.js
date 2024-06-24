// 1:
// function log() {
//   console.log("in ra log");
// }

// function logger() {
//   log();
// }

// logger();

// 2: code block có nghĩa là dấu ngoặc nhọn {} ;
// {
//   const age = 18;
//   console.log(age); // trong trường hợp này thì không lỗi
// }
// console.log(age); // viết ra ngoài scope thì run error. Nếu biến age được định nghĩa là var thì có thể run global. Nhưng ở đây là biến const nên không thể run global

// 3: Local scope -> phạm vi trong {}
// function logger() {
//   function logger2() {
//     console.log("LOG 2");
//   }
//   logger2(); // Khai báo logger2() trong này thì nó sẽ không lỗi vì nó ở trong scope (phạm vi)
// }
// logger();

// 4:
// function logger(first, last) {
//   console.log(first, last);
// }
// logger("Duy", "Nghĩa");
// logger("Thanh", "Thuỷ");
// logger("Ku", "Nhí");

// 5:
// const fullName = "ku nhi";
// function logger(first, last) {
//   console.log(first, last);
//   var age = 20;
//   console.log(age, fullName);
// }
// logger("duy", "nghia");
// logger("thanh", "thuy");
// logger("le", "long");

// 7.2:
function makeCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}
const increase1 = makeCounter();
console.log(increase1());
console.log(increase1());
console.log(increase1());
