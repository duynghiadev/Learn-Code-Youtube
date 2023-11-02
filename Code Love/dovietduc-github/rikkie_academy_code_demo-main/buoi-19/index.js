// 1. quy định: 30 phút
// 1. Khai báo function
// 1.1 Tại sao chúng ta cần function
// hàm giúp thực thi một khối mã lệnh khác nhau và bạn có thể truyền tham số

// 1.2 Cách khai báo hàm
function showWellCome(name) {
  // let name = 'duc';
  // body hàm hay thân hàm là nơi chứa các câu lệnh thực thi
  console.log('wellcome ' + name)
}

// 1.3 gọi hàm hay còn gọi thực thi hàm
// truyền vào ở nơi thực thi hàm là value
showWellCome('duc')
showWellCome('duy')
showWellCome('manh')

// 2. Cách khai báo hàm khác
// tạo ra hàm và gán nó cho 1 biến
let showInfo = function (name) {
  console.log('show info ' + name)
}

// thuc thu ham
showInfo([1, 2, 4])
showInfo('duy')
showInfo('manh')

// đề bài
// viết 1 chương trình bằng hàm thực thi in ra tổng của 2 số a, b
// khai báo hàm
function addNumber(a, b) {
  // log kết quả của a + b
  return a + b
}

// thực thi hàm
let result = addNumber(5, 6)
console.log('result', result)

// arguments
// hàm nhân nhiều số
function mutiple() {
  // arguments -- cách truy cập value khi gọi hàm mà
  // không khởi tạo biến chứa value
  // console.log(arguments[0]);
  // console.log(arguments[1]);
  // console.log(arguments[2]);
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  return sum
}

console.log(mutiple(4, 5, 6))
console.log(mutiple(4, 5))
console.log(mutiple(4))
console.log(mutiple(4, 5, 6, 7))

// hàm trả về kết quả nếu true -> vẫn còn
// false -> không còn

// function showMessageForLove(isLove) {
//     let message;
//     if(isLove) {
//         message = 'Em chán anh lắm rồi, chim cút';
//     } else {
//         message = 'Em vẫn còn yêu anh nhiều lắm';
//     }

//     return message;
// }

// gọi hàm
// hàm thông thường cần kết quả trả về;
// showMessageForLove(true) -> value chính là message
// yêu cầu true, false có hàm confirm trả về để nhỡ bạn gái có chọn nhầm
// thì vẫn cho bạn gái cơ hội quay lại
// let isConfirmLove = confirm(
//     `Em chắc chắn muốn chia tay anh chứ,
//     nếu ok em không còn cơ hội đâu, suy nghĩ kĩ vào`
// );
// let resultMesage = showMessageForLove(isConfirmLove);
// console.log(resultMesage);

// bài 2: Viêt 1 hàm chuyển đổi độ F sang độ C với công thức như sau:
// C = (F– 32) /1.8
// đầu vào của hàm là độ F bất kì

let arrMin = []

// hàm return -1 nghĩa là []
// khi index = -1 nghĩa mảng []
function getMin(minArr) {
  // giả sử nhỏ nhất ở vị trí 0
  let min = minArr[0]
  // so sánh min với giá trị khác
  for (let i = 1; i < minArr.length; i++) {
    if (minArr[i] < min) {
      min = minArr[i]
    }
  }
  return min
}

let minArrReturn = -1
// tra ve min cua mang
if (arrMin.length > 0) {
  let minArrReturn = getMin(arrMin)
  console.log('gia tri min', minArrReturn)
}

// chữa bài số nguyên tố
// c1: Làm theo thông thường ai cũng hiểu
// hàm kiểm tra số nguyên tố
// quy định: hàm trả về true -> là số nguyên tố, false không phải nguyên tố
// solution: tạo ra biến có 2 trạng thái true(số nguyên tố) false(không phải nguyên tố)
function isPrime(number) {
  let flagPrime = true
  // 1. nhỏ hơn 2
  if (number < 2) {
    flagPrime = false
  } else if (number > 2) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      console.log('i', i)
      // nếu number chia hết cho bất kì số nào thi nó không phải nguyên tố
      if (number % i === 0) {
        flagPrime = false
        break
      }
    }
  }

  return flagPrime
}

// thực thi hàm
const numberCheck = isPrime(49)
if (numberCheck) {
  console.log('đây là số nguyên tố')
} else {
  console.log('đây không phải là số nguyên tố')
}

// n < 2 -> không nguyên tố
// n = 2 -> nguyên tố
// n > 2 -> nó chia hết cho số nào trong
// khoảng từ > 2 và nhỏ hơn n thì k phải nguyên tố

// c2: level middle

// c3:

// quản lí sản phẩm
let produts = ['Nokia', 'Samsung', 'Iphone']

// hàm show list danh sách sản phẩm
function showList(produts) {
  let listProduct = ''
  for (let i = 0; i < produts.length; i++) {
    listProduct = listProduct + `<li>${produts[i]}</li>`
  }
  listProduct = `<ul>${listProduct}</ul>`
  document.write(listProduct)
}

// hàm thêm sản phẩm
function addProduct(productName) {
  produts.push(productName)
  showList(produts)
}
// thêm sản phẩm
addProduct('oppo')

// hàm sửa sản phẩm
// input:
// 1. vị trí cần sửa(index)
// 2. giá trị cần sửa
function editProduct(index, nameEdit) {
  produts[index] = nameEdit
  showList(produts)
}

editProduct(0, 'Vertu')

// hàm xóa sản phẩm
// input:
// 1. vị trí cần sửa(index)
function deleteProduct(index) {
  // xóa sản phẩm
  produts.splice(index, 1)
  showList(produts)
}
deleteProduct(0)

// tính tổng -- câu trả lời là: không
function sumNumber(numbers) {
  let sum = 0
  // biến chỉ truy cập trong hàm

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum
}

console.log(sumNumber([1, 2, 3, 4, 5, 6]))

// hàm conver chữ cái của mỗi từ đầu tiên thành hoa
// let a = "hello WORD";
// let b = "rIkkEi acaDEMY";
// console.log(capitalize(a)); // Hello Word
// consoloe.log(capitalize(v)); // Rikkei Academy

// ->Hello Word
function capitalize(textConverter) {
  // 1. chuyển đổi thành chữ thường ->hello word
  textConverter = textConverter.toLowerCase()
  // 2. split ra thành mảng, các phần tử của mảng ngăn cách nhau ['hello', 'word']
  let textConverterArr = textConverter.split(' ')
  for (let i = 0; i < textConverterArr.length; i++) {
    // 3. loop qua mảng và thay đổi kí tự đầu tiên của phần tử mảng đến in hoa (h -> H, w ->W)
    let fistCharacterStr = textConverterArr[i][0]
    let sectionFromIndex1Str = textConverterArr[i].slice(1)
    let strConvertCapitalFirst =
      fistCharacterStr.toUpperCase() + sectionFromIndex1Str

    // 4. Các kí tự còn lại giữ nguyên ['Hello', 'Word']
    textConverterArr[i] = strConvertCapitalFirst
  }

  // 5. convert mảng về string -> join (' ') ->Hello Word
  return textConverterArr.join(' ')
}

console.log(capitalize('rIkkEi acaDEMY'))
