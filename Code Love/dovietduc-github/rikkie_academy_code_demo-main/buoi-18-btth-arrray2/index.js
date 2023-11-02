// 1. Các Hàm Về Array Cần Nhớ Để Làm Tốt Bài Tập

// 1.1 Hàm Chuyển Đổi string -> array
// các phần tử string cách nhau bằng dấu phẩy + space
// muốn chuyển đổi bạn phải nhìn ra điểm chung
let numbers = '1, 2, 3, 4, 5'
let numbersArray = numbers.split(', ')
console.log(numbersArray)

// 1.2 Hàm chuyển đổi array sang string
let arrayNumber = [3, 4, 5]
let strConvert = arrayNumber.join('-')
console.log(strConvert)

// 2. Các Hàm Thêm, Xóa, Sửa Đổi (update) mảng
let arrInput = [5, 6, 7]
// 2.1 Thêm phần tử vào trong mảng

// end
arrInput.push(8, 9)
console.log(arrInput)
console.log(arrInput[0])

// start
// thay đổi index các phần tử trước đấy
arrInput.unshift(1, 2)
console.log(arrInput)
console.log(arrInput[0])

// middle
arrInput.splice(2, 0, 'a', 'b')
console.log(arrInput)

// 2.2 Xóa phần tử khỏi mảng

// end
let last = arrInput.pop()
console.log('last', last)
console.log(arrInput)

// start
let first = arrInput.shift()
console.log('first', first)
console.log(arrInput)

// middle
arrInput.splice(2, 1)
console.log(arrInput)

// 3. Nhớ thêm vào là push, xóa là splice (split, join, splice, push)

// 4. Hàm sort trong mảng
let arr = ['dovietduc', 'tran nhat duy'] // sắp xếp tăng dần
// 1. Khi hàm sort chạy nó sẽ convert tất cả các kí tư đến string
// 2. Nó sẽ so sánh các string với nhau, nếu string có nhiều phần tử nó sẽ so sánh với phần tử đầu tiên
// 3. so sánh string nó nằm trong bảng convert acii table

arr.sort()
console.log(arr)
// 1->49
// 2->50
// 100 < 2

// bai 1
let arrNumber1 = [1, 2, 3, 4, 5, 6, 7, 11, 9, 10]
let countNumberLarge10 = 0

for (let i = 0; i < arrNumber1.length; i++) {
  if (arrNumber1[i] >= 10) {
    countNumberLarge10 = countNumberLarge10 + 1
  }
}

console.log('so phan tu lon hon 10', countNumberLarge10)

// bai 2
let arrNumber2 = [100, 200, 3, 4, 5, 6, 7, 11, 9, 10]
let indexMax = 0
let max = arrNumber2[indexMax]

for (let i = 0; i < arrNumber2.length; i++) {
  if (arrNumber2[i] > max) {
    max = arrNumber2[i]
    indexMax = i
  }
}
console.log('phan tu lon nhat la', max)
console.log('index phan tu lon nhat la', indexMax)

// bai 3
let arrNumber3 = [100, 200, 3, 4, 5, 6, 7, 11, 9, 10]
let max2 = arrNumber3[0]
let averageNumber
let lengthArr = arrNumber3.length
let sum = 0

for (let i = 0; i < lengthArr; i++) {
  sum = sum + arrNumber3[i]

  if (arrNumber3[i] > max) {
    max = arrNumber3[i]
  }
}
averageNumber = sum / lengthArr
console.log('max', max)
console.log('trung binh', averageNumber)

// bai 4
let arrNumber4 = [100, 200, 3, 4]
let arrReseve = []

for (let i = arrNumber4.length - 1; i >= 0; i--) {
  arrReseve.push(arrNumber4[i])
}
console.log(arrReseve)

// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
let arrNumber5 = [100, 200, -3, -4]
let count = 0
for (let i = 0; i < arrNumber5.length; i++) {
  if (arrNumber5[i] < 0) {
    count++
  }
}
console.log('so phan tu nho hon 0', count)

// bài 6
// let arrNumber6 = [1, 2, 3, 4, 5, 6, 7, 11, 9, 10];
// let numberEnter = +prompt('nhập số nguyên cần tìm');
// let message = 'Number X is not in the array';

// khác -1 là tìm được số đó trong mảng
// if(arrNumber6.indexOf(numberEnter) !== -1) {
//     message = 'Number X is in the array';
// }

// console.log('thong diep va loi chao', message);
// for(let i = 0; i < arrNumber6.length; i++) {
//     if(arrNumber6[i] === numberEnter) {
//         message = 'Number X is in the array';
//         break;
//     }
// }
// console.log('thong diep va loi chao', message);

// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập ph
// let arrNumber7 = [1, 2, 3, 3, 5, 6, 7, 11, 9, 10];
// let arrNew7 = [];
// // xóa các phần tủ giống nhập vào
// let numberEnter2 = +prompt('nhập số nguyên cần tìm');

// let indexElement = arrNumber7.indexOf(numberEnter2);
// if(indexElement !== -1) {
//     arrNumber7.splice(indexElement, 1);
// }
// console.log(arrNumber7);
// for(let i = 0; i < arrNumber7.length; i++) {
//     if(arrNumber7[i] === numberEnter2) {
//         continue;
//     }
//     arrNew7.push(arrNumber7[i]);
// }
// console.log(arrNew7);

// bai 8
// let arrNumber8 = [1, 2, 3, 3, 5, 6, 7, 11, 9, 100];
// arrNumber8.sort(
//     function(a, b) {
//         return b - a;
//     }
// );
// console.log(arrNumber8);

let a = [
  [1, 2, 1, 24], // 0
  [8, 11, 9, 4], // 1
  [7, 0, 7, 27], // 2
  [7, 4, 28, 14], // 3
  [3, 10, 26, 7] // 4
]
console.log(a)

for (let i = 0; i < a.length; i++) {
  console.group()
  console.log('vòng lặp thứ: ', i)
  console.log('value của vòng lặp thứ: ' + i, a[i])

  // mảng con
  let arrChild = a[i]

  for (j = 0; j < a[i].length; j++) {
    // các value trong mảng con
    console.log(`value của vòng lặp với i = ${i} và j = ${j}`, arrChild[j])
  }
  console.groupEnd()
}

// bai 5
let messageOrigin = 'hello word'
let messageCompare = 'hello word 2'

let messageOriginArr = messageOrigin.split(' ')
let messageCompareArr = messageCompare.split(' ')
let messageEnd = 'hai chuỗi giống nhau'

if (messageOrigin.length !== messageCompare.length) {
  messageEnd = 'hai chuỗi khác nhau'
}

for (let i = 0; i < messageOriginArr.length; i++) {
  if (messageOriginArr[i] !== messageCompareArr[i]) {
    messageEnd = 'hai chuỗi khác nhau'
    break
  }
}
console.log('messageEnd', messageEnd)

// bai 6 -- level easy
// _
let arr6 = ['-', 1, 2, '-']

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] === '-') {
    arr6.splice(i, 1, '_')
  }
}
console.log(arr6)

// level mudium
let arr7 = ['ab-', 1, 2, 'cd-', 'fh']
// ab_

for (let i = 0; i < arr7.length; i++) {
  // kiểm tra item có - và string
  if (typeof arr7[i] === 'string' && arr7[i].indexOf('-') !== -1) {
    let strConvert = arr7[i].replace('-', '_')
    arr7[i] = strConvert
  }
}

console.log(arr7)

let arr8 = [1, 2, 3, 4]

for (let i = 0; i <= arr8.length; i++) {
  let x = arr8[i]
}

// let arr7 = [
//     'ab-',
//     '1h-',
//     2,
//     '-'
// ];

// for(let i = 0; i < arr7.length; i++) {
//     let result = '';

//     if(typeof arr7[i] === 'string' && arr7[i].indexOf('-') !== -1) {

//         // có dấu -
//         for(let j = 0; j < arr7[i].length; j++) {
//             if(arr7[i][j] === '-') {
//                 result = result + '_';
//             } else {
//                 result = result + arr7[i][j];
//             }
//         }

//     } else {
//         result = arr7[i];
//     }

//     arr7[i] = result;

// }
// console.log(arr7);
