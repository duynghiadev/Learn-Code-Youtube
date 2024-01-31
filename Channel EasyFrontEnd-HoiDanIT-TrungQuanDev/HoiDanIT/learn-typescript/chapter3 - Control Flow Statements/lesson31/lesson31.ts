//spread syntax vs rest => copy all
// Toán tử spread phải đứng cuối cùng của mảng hoặc object mà mình khai báo

function getTotal_1(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  //[10, 20].forEach((num) => total += num);
  //[].forEach((num) => total += num);
  return total;
}

console.log(getTotal_1()); // 0
console.log(getTotal_1(10, 20)); // 30
console.log(getTotal_1(10, 20, 30)); // 60

function multiply_1(n: number, ...m: number[]) {
  let a = [69, 96, 3, 4].map((x) => {
    console.log("check x = ", x);
    return n * x;
  });

  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const test31 = multiply_1(15, 69, 96, 3, 4);

console.log(">>> check test31 = ", test31);

function Greet_1(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

console.log(Greet_1("Xin chao", "Eric &", "Hoi dan it")); // returns "Hello Steve, Bill!"

Greet_1("Hello", "ok"); // returns "Hello ok"
