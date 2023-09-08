const sum_3 = (x: number, y: number): number => {
  return x + y;
};

function sum4(x: number, y: number): number {
  // sau function không cần định nghĩa kiểu (type) trả về. TypeScript tự biết function trả về cái gì
  return x + y;
}

console.log(">> check sum_3 = ", sum_3(1, 10));
console.log(">>> check sum_4 = ", sum4(5, 5));

let a_1 = 10; //number
a_1 = sum_3(1, 10); //string
