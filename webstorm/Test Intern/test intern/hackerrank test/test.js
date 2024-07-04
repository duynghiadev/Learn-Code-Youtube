// Link test: https://www.hackerrank.com/test/b9dn3agcfje/questions/521e954e6ff11

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function main() {
  const n = 15; // Gán số 15 vào biến n
  fizzBuzz(n);
}

main();
