let countMax = 10
let count = 1

// while
while (count < countMax) {
  // khối lệnh thực thi;

  if (count % 2 === 0) {
    console.log('số ' + count + ' là số chẵn')
  } else {
    console.log('số ' + count + ' là số lẻ')
  }

  count = count + 1
}

console.log('whlle loop end')

// 2. vòng lặp for 1
let j = 1
for (;;) {
  if (j >= 10) {
    break
  }
  console.log('số hiện tại j là ' + j)

  j = j + 1
}

// 2. vòng lặp for 2
for (let k = 1; k < 10; k++) {
  console.log('số hiện tại k là ' + k)
}

// 3. vòng lặp do - while
let h = 9
do {
  // phan thuc thi
  console.log('h hien tai dang la ' + h)
  h++
} while (h < 10)

for (let m = 1; m < 5; m++) {
  for (let n = 1; n < 5; n++) {
    // content runnning, co the log ra 1 dieu gi day?
    // console.log(m * n);
  }
}

// switch case
// category
// nếu category = news -> log nội dung: đây là phần tin tức
// nếu category = sport ->log nội dung: đây là phần thể thao
// nếu category = family ->log nội dung: đây là phần gia đình
// nếu category = house ->log nội dung: đây là phần xây dựng nhà

// alert(`Xin nhập category sau:
//             1. tin tức (news)
//             2. thể thao (sport)
//             3. gia đình (family)
//             4. xây dựng nhà (house)
// `);

// let category = prompt('Xin nhập category: ');

// if(category === 'news') {
//     console.log('news');
// } else if(category === 'sport') {
//     console.log('sport');
// } else if(category === 'family') {
//     console.log('family');
// } else if(category === 'house') {
//     console.log('house');
// } else {
//     console.log('ban dang nhap khong dung category');
// }

// switch(category) {

//     case 'news':
//         console.log('news');
//         break;
//     case 'sport':
//         console.log('sport');
//         break;
//     case 'family':
//         console.log('family');
//         break;
//     case 'house':
//         console.log('house');
//         break;
//     default:
//         console.log('ban dang nhap khong dung category');

// }

// let year = 2000;
// if(year % 4 === 0 && year % 100 !== 0) {
//     console.log('nam nhuan');
// } else if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     console.log('nam nhuan');
// } else {
//     console.log('khong phai nam nhuan');
// }

// let nameFromSystem = prompt('Xin hãy nhập tên:');
// if(nameFromSystem === 'null') {
//     nameFromSystem = null;
// }

// if(nameFromSystem === 'Admin') {
//     let password = prompt('hay nhap mat khau');

//     if(password === 'TheMaster') {
//         console.log('Wellcome');
//     } else if(password === 'null') {
//         console.log('Cancelled');
//     } else {
//         console.log('Wrong password');
//     }

// } else if(nameFromSystem === null) {
//     console.log('Canceld');
// } else {
//     console.log('I don’t know you');
// }

// Viết 1 chương trình javascript, trong đó chương trình sẽ tạo ra 1 sỗ ngẫu nhiên từ 1 đến 10 (bước 1)
// chương trình cho người dùng nhập vào 1 số bất kì từ 1 đến 10
// Nếu sô người dùng nhập vào đúng số chương trình tạo ra ngẫu nhiên ở bước 1 thì hiển thị message "Good Work"
// Nếu sô người dùng nhập vào không đúng số chương trình tạo ra ngẫu nhiên ở bước 1 thì hiển thị message "Not matched"

// 1. Math.random() tạo ra số ngẫu nhiên là số thực từ 0 đến 1, gọi là biến x (0 < x < 1)
// 2. Muốn tạo ra số thực từ 0 đến n chúng ta cần nhân với n
// 3. 0 < x < 1 nên nếu ta nhân với 10 sẽ được: 0 * 10 < x.10 = y < 1*10 --> biến y thu được từ 0 đến 10 (0 < y < 10)
// 4. Làm tròn số thực lên: y từ 0.1 đến 9.9999 -> làm tròn số lớn hơn 0 được 1, làm tròn số nhỏ hơn 10 được 10
// 5. Ta sẽ thu được số từ 1 đến 10 (Math.ceil)

Math.ceil(Math.random() * 10)

// 1. nhập 1 số bất kì promp
// 2. Nếu số nhập lớn hơn 13 trả về kết quả (số nhập - 13) * 2
// 3. Nếu số nhập nhỏ hơn 13 trả về số nhập

// 1. Viết 1 chương trình js cho phép nhập 2 số a, b
// 2. Nếu 1 trong 2 số là 50 hoặc nếu tổng chúng là 50 thì trả về true
// 3. Ngược lại trả về false

// 1. Viết chương trình nhập vào chuỗi bất kì (promp)
// 2. Nếu chuỗi đã cho bắt đầy bằng Py thì trả về chuỗi gốc (không thêm Py trước chuỗi nhập)
// 3. Nếu chuỗi đã cho không bắt đầu bằng Py thì nối thêm Py vào trước chuỗi
// (ví dụ : )
// ví dụ: 1. Nếu nhâp Python thì show ra Python
// 2. Nếu nhập vào php thì in ra Pyphp(Nối thêm Py)

// hàm lấy một chuỗi con trong chuỗi lớn

let pString = 'Python'
console.log(pString[0])
console.log(pString[1])
console.log(pString[2])
console.log(pString.length)

// console.log(pString.substring(tham số 1, tham số 2));
// 1. Lấy bắt đầu từ đâu (dựa vào index) (tham số 1)
// 2. Cái index kết thúc

// Viết 1 chương trình js để xóa 1 kí tự bất kì của chuỗi đã cho(kí tự xóa có index cho trước)
// Ví dụ chuỗi: Python
// yêu cầu xóa kí tự có index bằng 2
// hãy nhận về chuỗi kết quả: Pyhon

// php-> ph
// mysql -> myql

// let str = prompt('xin nhập string có ít nhất 3 kí tự');
// let strLength = str.length;

// mysql -> myql

// 0 -- 2 --> my
// 2 + 1 --> end
// let indexRemove = 2;

// if(strLength === 3) {
//     console.log(str.substring(0, strLength - 1));
// } else if (strLength > 3) {
//     let str1 = str.substring(0, indexRemove);
//     let str2 = str.substring(indexRemove + 1, strLength);
//     console.log(str1 + str2);
// } else {
//     console.log('Xin hay nhap it nhat 3 ki tu');
// }

// Viết chương trình javscript cho phép nhập vào 2 số a, b
// Kiểm tra nếu 2 số nhập vào trong khoảng 50 đến 99 ( 50<a<99)
// kiểm tra a và b đều là số chia hết cho 3 --> 2 số đều là bội của 3
// kiểm tra a hoặc b chia hêt cho 3 thì in ra str: a chia hết cho 3 nhưng b không chia hết cho 3
// false

// 1, 7, 5 --> so lon nhat 7
// c1: 1. giả sử 1 số nào đó là lớn nhất, lưu vào biến
//     2. so sánh giá trị lớn nhất với giá trị còn lại --> nếu giá trị còn lại lớn hơn
// -> gán giá trị còn lại bằng max

// let a = +prompt('nhập số a');
// let b = +prompt('nhập số b');
// let c = +prompt('nhập số c');

// // giả sử a là max
// let max = a;
// // so sánh max với b
// if(b > max) {
//     max = b;
// }

// // so sánh với c
// if(c > max) {
//     max = c;
// }
// console.log('max la' + max);

// c2: //1: tìm số lớn nhất trong 3 số --> trả về số lớn nhất
//     // 2: so sánh 2 số còn lại

// a là số lớn nhất
if (a > b && a > c) {
  console.log(a + ' là số lớn nhất')
} else {
  // a không phải lớn nhất
  if (b > c) {
    console.log(b + ' là số lớn nhất')
  } else {
    console.log(c + ' là số lớn nhất')
  }
}

if (a > b && a > c) {
  console.log(a + ' là số lớn nhất')
} else if (b > c) {
  console.log(b + ' là số lớn nhất')
} else {
  console.log(c + ' là số lớn nhất')
}

// 100
// nhập vào 2 số a, b
// a - 100 và b - 100, hiệu nào nhỏ hơn thì số đấy gần nhất
// Math.abs() --> Lấy ra giá trị tuyệt đối của 1 số
// 89 -- 120 --> 89 gan hơn
// 70 --- 89 --> 89 gan hoen

// Số nào có giá trị tuyệt đối trừ đi 100 nhỏ hơn thì số đó gần hơn nhé
