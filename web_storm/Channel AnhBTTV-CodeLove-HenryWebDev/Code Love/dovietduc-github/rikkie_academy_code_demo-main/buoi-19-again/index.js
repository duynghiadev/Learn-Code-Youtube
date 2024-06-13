// Function
// bài toán: viết 1 chương trình js cộng 2 số a, b
let a = 10
let b = 5
console.log('a + b = ', a + b)

// bài toán: viết 1 chương trình js nhân 2 số a, b
console.log('a x b = ', a * b)

// bài toán: viết 1 chương trình js - 2 số a, b
console.log('a - b = ', a - b)

// bài toán: viết 1 chương trình js chia 2 số a, b
console.log('a : b = ', a / b)

// câu hỏi đặt ra liệu chúng ta có thể đưa logic của 4 phần này đóng gói và sử dụng lại được không?
// function
// 1. Cách khai báo 1 hàm trong js
var nameInfo
// return
function calculatorNumber(typeOperator, a, b) {
  let result
  // thân hàm hay là tập hợp khối lệnh thực thi ở đây
  console.log('typeOperator', typeOperator)
  if (typeOperator === '+') {
    result = a + b
  } else if (typeOperator === '-') {
    result = a - b
  } else if (typeOperator === 'x') {
    result = a * b
  } else {
    result = a / b
  }

  return result
}

// thực thi hàm;
let calculatorResultAdd = calculatorNumber('+', 10, 5)
let calculatorResultSub = calculatorNumber('-', 10, 5)
let calculatorResultMuti = calculatorNumber('x', 10, 5)
let calculatorResultDevide = calculatorNumber('/', 10, 5)

console.log(
  calculatorResultAdd,
  calculatorResultSub,
  calculatorResultMuti,
  calculatorResultDevide
)

// Mối quan hệ giữa hàm thực thi và hàm khai báo
// giá trị truyền vào ở hàm thực thi là value (number, string, array)calculatorNumber([1, 2, 3]);
// giá trị nhận vào (typeOperator) của hàm khai báo là biến
// như vậy: Khi hàm thực thi là quá trình khởi tạo biến =  value

// khai báo hàm check đối xứng
// flagkPalindrome = true; -> đối xứng
function isPalindrome(checkPalindrome) {
  // 1.xác định số phần tử của nửa bên trái cần lặp để so sánh
  let strLeng = checkPalindrome.length
  let countLeft = strLeng / 2
  let flagkPalindrome = true

  // so sánh bên trái và phải có giống nhau không? nếu 1 index không giống nhau
  // thì chuỗi không đối xứng
  for (let i = 0; i < countLeft; i++) {
    if (checkPalindrome[i] !== checkPalindrome[strLeng - 1 - i]) {
      flagkPalindrome = false
      break
    }
  }

  // khi mọi phần tử đối xứng bằng nhau
  return flagkPalindrome
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('raceca'))
console.log(isPalindrome('ducd'))

// Bai 2
function addNumber(x) {
  x = x + 1
  return x
}
console.log(addNumber(2))

// Bài 3: Tạo hàm nhận vào hai tham số.
// Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
function compareNumber(a, b) {
  if (a > b) {
    // alert('a lớn hơn b');
  } else {
    return a + b
  }
}

// console.log(compareNumber(3, 2));

function addNumbers() {
  firstNum = 4
  secondNum = 8
  result = firstNum + secondNum
  return result
}
result = 0
// trước kết quả
result = addNumbers()
// sau kết quả

// bài 5
// let starName = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
// let conterlationStar = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

// function findStars(name) {
//     let indexStar = starName.indexOf(name);
//     if(indexStar === -1) {
//         return 'Không có ngôi sao nào như bạn nhập';
//     }
//     // find chom sao
//     return conterlationStar[indexStar];
// }
// let nameStar = prompt('Xin nhập tên ngôi sao');

// alert(findStars(nameStar));

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

function factorial(n) {
  let s = 1

  for (let i = 2; i <= n; i++) {
    s = s * i
  }
  return s
}

console.log(factorial(3))

// số lần xuất hiện
// function count(strInput) {

//     let occurs = [];

//     for (let i = 0; i < strInput.length; i++) {
//         let occurCharacter = countOccurs(strInput, strInput[i]);

//         // số lần xuất hiện của kí tự
//         let strunique = strInput[i] + 'x' + occurCharacter;
//         if (occurs.indexOf(strunique) === -1) {
//             occurs.push(strInput[i] + 'x' + occurCharacter);
//         }

//     }

//     console.log(occurs);

//     //print it!
//     for (i = 0; i < occurs.length; i++) {
//         let subStr1 = occurs[i].split('x');
//         console.log('kí tự ' + subStr1[0] + ' xuất hiện ' + subStr1[1] + ' lần');
//     }

// }

// function countOccurs(text, character) {

//     let count = 0;

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === character) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

// count("abcdefabcd");

// function count2(string) {
//     string = string.replace(' ', '');
//     let string1Arr = string.split("");
//     let string1ArrSort = string1Arr.sort();
//     let string1 = string1ArrSort.join('');

//     let counter = 1;
//     let data = [];

//     for (let i = 0; i < string.length; i++) {
//         if (string1[i] === string1[i + 1]) {
//             counter++;
//         }
//     }
// }
// count2("thequickbrownfox jumpsoverthelazydog");

// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function twoSum(arr, S) {
//     const sum = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (S === arr[i] + arr[j]) sum.push([arr[i], arr[j]])
//         }
//     }
//     return sum
// }

// console.log(twoSum(arr, 10));
function countOcerence(nameString) {
  // 1. chuẩn hóa data
  nameString = nameString.toLowerCase()
  let countOccurs = []

  for (let i = 0; i < nameString.length; i++) {
    // bắt đầu đếm số lần xuất hiện của 1 kí tự
    let count = 0

    for (j = 0; j < nameString.length; j++) {
      if (nameString[i] === nameString[j]) {
        count = count + 1
      }
    }

    // kết thúc đếm số lần xuất hiện của 1 kí tự
    let unique = nameString[i] + 'x' + count
    if (countOccurs.indexOf(unique) === -1) {
      countOccurs.push(unique)
    }
  }

  return countOccurs
}

let countOccursResult = countOcerence('Helsssslo Worrrld')
for (let i = 0; i < countOccursResult.length; i++) {
  let arrConverStr = countOccursResult[i].split('x')
  console.log(`Kí tự ${arrConverStr[0]} xuất hiện ${arrConverStr[1]} lần`)
}

// cách 2
function countOcerence2(nameString) {
  // 1. chuẩn hóa data
  nameString = nameString.toLowerCase()
  // bước 1: tách ra các phần tử trong mảng là các kí tự
  let nameStringArray = nameString.split('')
  // bước 2: Thực hiện sắp xếp mảng
  let nameStringArraySort = nameStringArray.sort()
  // bước 3: Tạo lại string dựa vào mảng đã được sắp xếp
  let nameStringSort = nameStringArraySort.join('')

  // khởi tạo biến đếm cho kí tự bất kì
  let count = 1
  for (let i = 0; i < nameStringSort.length; i++) {
    if (nameStringSort[i] === nameStringSort[i + 1]) {
      count = count + 1
    } else {
      console.log(`số kí tự của ${nameStringSort[i]} là ${count}`)
      count = 1
    }
  }
}

countOcerence2('ddadacoc')

// tổng bàng 10
function sumTwoNumber(arrNumber, total) {
  let result = []
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = i + 1; j < arrNumber.length; j++) {
      if (i !== j && total === arrNumber[i] + arrNumber[j]) {
        result.push([arrNumber[i], arrNumber[j]])
      }
    }
  }
  return result
}

console.log(sumTwoNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))
