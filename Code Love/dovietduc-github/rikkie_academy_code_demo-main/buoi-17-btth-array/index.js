// bai 1:
// 1.1 cho mảng có các phần tử sau a = ["toan", "li", "hoa"]
// 1.2 cho người dùng nhập tên mô học: toán, lí, hóa -->promp
// 1.3 tìm phần tử trong mảng có value bằng value người dùng nhập vào
// 1.4 Nếu 2 value bằng nhau --> trả về index của phần tử mảng thỏa mãn
// 1.5 Nếu không tìm được value nào trong mảng trùng với giá trị nhập vào trả về -1

// let nameEnter = prompt('nhập vào môn học bạn yêu thích:'); // Toán

// // nameEnter === 'Toan' arrSubject[0]
// // nameEnter === 'Li' arrSubject[1]
// // nameEnter === 'Hoa' arrSubject[2]
// let resultIndex;

// for(let i = 0; i < arrSubject.length; i++) {

//     if(nameEnter === arrSubject[i]) {
//         resultIndex = i;
//         break;
//     } else {
//         resultIndex = -1;
//     }

//     console.group();
//     console.log('lần chạy thứ', i);
//     console.log('resultIndex', resultIndex);
//     console.groupEnd();

// }

// c2: Dùng 1 biến lưu trữ và gán đi gán lại value của nó

// let arr = [-3, 5, 1, 3, 2, 10];
// let arrReserve = [];
// for(let i = arr.length - 1; i >= 0; i--) {
//     arrReserve.push(arr[i]);
// }
// console.log(arrReserve);

// for(let i = 0; i < arr.length; i++) {

//     let j = arr.length - 1 - i;
//     arrReserve[i] = arr[j];
//     console.group();
//     console.log('i', i);
//     console.log('j', j);
//     console.groupEnd();

// }
// console.log(arrReserve);

// let numbers = [-3, 5, 1, 3, 2, 10];
// let maxNumber = numbers[0];

// for(let i = 1; i < numbers.length; i++ ) {

//     console.group();
//     console.log('lần chạy thứ: ', i)
//     console.log('giá trị value hiện tại so sánh', numbers[i]);
//     console.log('maxNumber', maxNumber);
//     console.log('so sánh 2 số ' + numbers[i] + ', ' + maxNumber + ' ', numbers[i] > maxNumber);
//     console.groupEnd();

//     if(numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }

// }

// console.log('maxNumber', maxNumber);

// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];

// let str2 = myColor.join(',');
// console.log(str2);

// "Lion,Tiger,Wolf,Kangaroo"
// let str = '';

// for(let i = 0; i < myColor.length; i++) {

//     if(i === myColor.length - 1) {
//         str = str + myColor[i];
//     } else {
//         str = str + myColor[i] + ',';
//     }

// }

// console.log(str);

let arrSubject = ['Toan', 'Li', 'Hoa']

let indexOf = arrSubject.indexOf('Hoasss')

let str = '245468'
let newArr = []
for (let i = 0; i < str.length - 1; i++) {
  if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
    newArr.push(str[i], '_')
  } else {
    newArr.push(str[i])
  }
}

newArr.push(str[str.length - 1])
let strNew = newArr.join('')

console.log(strNew)

// toLowerCase();
// toUpperCase();

// let check = UPPER.indexOf('A');
// if(check !== -1) {
//     i.toUpperCase()
// }

// indexOf nó sẽ kiểm tra value truyền vào có tồn tại trong string kiểm tra hay không?
// nếu value truyền vào có tồn tại trả về index của element thỏa mãn
// không tồn tại trả về -1

let strKt = 'dovietduc'
console.log(strKt.indexOf('d'))
console.log(strKt.indexOf('o'))
console.log(strKt.indexOf('M'))

let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let LOWER = 'abcdefghijklmnopqrstuvwxyz'
let strConvert = 'dovietDUC'
let arrConvert = []

for (let i = 0; i < strConvert.length; i++) {
  // nếu kí tự lặp qua là hoa
  if (UPPER.indexOf(strConvert[i]) !== -1) {
    // convert to lowercase
    arrConvert.push(strConvert[i].toLowerCase())
  }
  // nếu kí tự lặp qua là thường
  else if (LOWER.indexOf(strConvert[i]) !== -1) {
    arrConvert.push(strConvert[i].toUpperCase())
  }
  // kí tự khác
  else {
    arrConvert.push(strConvert[i])
  }
}

console.log(arrConvert.join(''))
