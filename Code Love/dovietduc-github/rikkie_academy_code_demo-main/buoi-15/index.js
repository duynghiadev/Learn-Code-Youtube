//

// let str = '';
// for(let i = 1; i <= 5; i++) {

//     for(let j = 1; j <=5; j++) {

//         if(j >= i) {
//             str = str + '*';
//         }
//     }

//     str = str + "\n";
// }

// console.log(str);

// let str = '';
// for(let i = 1; i <= 5; i++) {

//     for (let j = 1; j + i <= 5; j++) {
//         str += " ";
//     }

//     // printing star
//     for (let k = 1; k <= i; k++) {
//         str += "*";
//     }

//     str = str + "\n";
// }

// console.log(str);

// mệnh đề giả sử  sẽ đúng:
// khi i = 1, j = 5.... 1 --> số 1 là cuối cùng nên i = 1, j = 1 phải là sao
// khi i = 2, j = 5... 1--> số 1, 2 của là cuối cùng-> i = 2 , j =1 và i = 2, j = 2 sẽ là sao

// let firstNumber = 0;
// let secondNumber = 1;
// let nextNumber;

// for(let i = 0; i < 8; i++) {

//     if(i <= 1) {
//         nextNumber = i;
//     } else {
//         nextNumber = firstNumber + secondNumber;

//         // gan lai
//         firstNumber = secondNumber;
//         secondNumber = nextNumber;
//     }

//     console.log(nextNumber);
//     console.log("\n");

// }

// let str = '';
// for(let i = 1; i <= 7; i++) {

//     for(j = 1; j <= 21; j++) {
//         if(i === 1 || i === 7) {
//             str = str + '*';
//         } else {
//             if(j === 1 || j === 21) {
//                 str = str + '*';
//             } else {
//                 str = str + ' ';
//             }
//         }

//     }
//     str = str + "\n";
// }
// console.log(str);

let firstNumber = 0
let secondNumber = 1
let nextNumber

// let sum = 0;
// for(let i = 0; i < 8; i++) {
//     if(i <= 1) {
//         nextNumber = i;
//     } else {
//         nextNumber = firstNumber + secondNumber;

//         // gán lại số thứ 2 bằng kết quả tính trước đấy
//         firstNumber = secondNumber;
//         secondNumber = nextNumber;

//     }
//     /// sum
//     sum = sum + nextNumber;
//     console.log(nextNumber);
//     console.log("\n");
// }

// console.log(sum);

// bài 6
let sum1 = 0

for (i = 1; i <= 210; i++) {
  if (i % 7 === 0) {
    sum1 = sum1 + i
  }
}
console.log('sum', sum1)

// cach 2
let sum = 0
for (let i = 1; i <= 30; i++) {
  sum = sum + 7 * i
}
console.log('sum', sum)

// cách 3
let sum3
for (let k = 1; k <= 1; k++) {
  sum3 = (1 + 30) * 15 * 7
}
console.log('sum', sum3)

// cách 4  gợi ý cách 4
// vẫn dùng loop nhưng loop nhỏ hơn 30 vòng

// Hello world --> dlrow olleH
let strTest = 'Hello world'
let reserveStr = ''

for (let i = strTest.length - 1; i >= 0; i--) {
  reserveStr = reserveStr + strTest[i]
  // console.log('ki tu tuong ung trong lap ' + i + ': ', strTest[i]);
}

console.log('dao nguoc', reserveStr)

// n = 100;
// let str = '';

// for(let i = 2; i < n; i++) {
//     if(n % i === 0) {
//         str = str + i + ', ';
//     }
// }

// console.log(str);
let strIndex = 'duc'
for (let i = 1; i < 4; i++) {
  console.log(strIndex[index])
}
