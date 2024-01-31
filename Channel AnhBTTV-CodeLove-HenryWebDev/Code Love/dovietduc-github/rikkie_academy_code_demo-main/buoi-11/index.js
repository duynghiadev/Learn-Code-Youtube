// So Sánh Và Dễ Dàng Nhận Kết Quả true, false(boolean)

let x = 1 // phép gan

console.log(x > 0)
console.log(x >= 1)
console.log(x < 0)
console.log(x <= 1)

// so sánh =;
// so sánh chặt chẽ
console.log(1 === 1)

// so sánh lỏng lẻo
console.log(1 == 1)

console.log('1' == 1)
console.log('1' === 1)
console.log(true == 1)

// so sánh chặt chẽ 3 dấu = yêu cầu:
// 1. cùng value
// 2. cùng kiểu dữ liệu

// so sánh lỏng lẻo 2 dấu = yêu cầu:
// 1. cùng value
// 2. Không cần kiểu dữ liệu (nó sẽ tự động ép kiểu cho bạn)

// 2. Cách js convert các giá trị không phải boolean sang true, hoặc false

// 2.1 Các giá trị sẽ được convert sang false
// undefined;
// null
// 0
// '', "", ``
// --> false

// 2.2 Ngoài giá trị này nó sẽ là true

let z = 1

if (z) {
  console.log(123)
}

console.log(false == null)
console.log(true == 0)

// 3. kết hợp các phép so sánh với nhau
// 3.1 && or ||
// 3.2 boolean

// and boolean
console.log(true && true)
console.log(true && false)
console.log(false && true)

console.log('' && true)
console.log(0 && true)
console.log(undefined && true)
console.log(null && true)
console.log(false && true)
console.log(true && false)
console.log(true && 0 && true)
console.log(1 && 2 && 3)

// or boolean
console.log(true || true)
console.log(true || false)
console.log(false || true)

console.log(false || false)
console.log(false || false || true)

// 4. hãy cẩn thận khi kết hợp toán tử trong js
console.log((2 + 5) * 4)

// 5. điều kiện trong js
let score = 7.5

if (score > 8 && score < 10) {
  // khoi lenh chay
  console.log('Học sinh giỏi')
} else if (score > 7 && score < 8) {
  console.log('Học sinh khá')
} else if (score > 5 && score < 7) {
  console.log('Học sinh trung bình')
} else {
  console.log('Học sinh kém')
}

// giai phuong trinh bac 2
// a, b, c ax2 + bx + c = 0;

//th1:  a khác 0 -> ax2 + bx + c = 0;
// Tính delta = b2 - 4ac
// nếu delta = 0 -> pt có nghiệm kép x1 = x2 = -b/2a
// nếu delta < 0 -> phương trình vô nghiệm
// nếu delta > 0 -> phương trình có 2 nghiệm x1 = -b + căn deta/2a,  x2 = -b - căn deta/2a

// tr2: a = 0 -> bx + c = 0
// th1: b = 0
//     c = 0 -> phương trình vô số nghiệm
//     c !0 -> phương trình vô nghiệm

// th2: b !0
// Phương trình có nghiệm -c/b
// input
// let a = +prompt('nhập số a');
// let b = +prompt('nhập số b');
// let c = +prompt('nhập số c');

// // kiểm tra a = 0 (xong phương trình bậc nhât)
// if(a === 0) {
//     if (b === 0) {
//         if (c === 0) {
//             // output
//             console.log('phương trình vô số nghiệm');
//         } else {
//             console.log('phương trình vô nghiệm');
//         }

//     }

// }
// // phương trình bậc 2 với a khác 0
// else {
//     // Tính delta = b2 - 4ac
//     let delta = b*b - 4*a*c;

//     if(delta === 0) {
//         let x1 = -b/(2*a);
//         let x2 = x1;
//         console.log('nghiệm kép x1 = x2 = ' + x1)
//     } else if(delta < 0) {
//         console.log('phuowng trình vô nghiệm');
//     } else {
//         let squareDelta = Math.sqrt(delta);
//         let x1 = (-b + squareDelta) / (2*a);
//         let x2 = (-b - squareDelta) / (2*a);
//         console.log('phương trình có 2 nghiệm phân biệt x1 = ' + x1 + ' và x2= ' + x2);
//     }

// }

// ++ --
// let count = 1;
// count++; // count = count + 1

// count--;

// bai 2:
// input: độ c
// output: độ f
// C/5 = (F-32)/9
// -> f-32 = 9c/5
// -> f = 9c/5 + 32
// let tempC = prompt('Xin nhập vào độ C: ');
// let result = ((9*tempC) / 5) + 32;
// console.log(tempC + ' độ C tương đương với ' + result + ' độ F');

// bài 3 chuyển đổi tiền tệ
// đồng tiền gốc là việt nam đồng
// lựa chọn đồng tiền muốn chuyển đổi, nghìa là từ vnđ -> usd
// nhập số tiền vnđ muốn chuyển đồi
// chuyển đổi sang usd tương ừng

// việt nam đồng (vnd)
// tiền mỹ (usd)
// tiền nhật (jpy)

// alert(`Xin hãy nhập các loại tiền được cho phép như sau:
//             1. Tiền việt nam đồng: (vnd)
//             2. Tiền mỹ: (usd)
//             3. Tiền nhật: (jpy)
// `);
// let amount = +prompt('Nhập số tiền cần chuyển đổi');
// let fromMoney = prompt('Nhập loại tiền gốc chuyển đổi');
// let toMoney = prompt('Nhập loại tiền chuyển đổi thành công');

// let result;

// if(fromMoney === 'vnd' && toMoney === 'usd') {
//     result = amount + ' việt nam đồng tương đương ' + amount/23000 + 'usd';
// } else if(fromMoney === 'vnd' && toMoney === 'jpy') {
//     result = amount + ' việt nam đồng tương đương ' + amount/166 + 'jpy';
// } else {
//     result = 'Xin vui lòng nhập đúng các loại tiền cần chuyển đổi';
// }

// console.log(result);

// bai tap may tinh
// alert(`Xin nhập 2 số và chọn phép tính tương ứng với 2 số:
//                 1. phép cộng (nhập vào +)
//                 2. phép trừ (nhập vào -)
//                 3. phép nhân (nhập vào x)
//                 4. phép chia (nhập vào /)
// `);

// let a = +prompt('Xin nhập vào số thứ nhất:');
// let b = +prompt('Xin nhập vào số thứ hai:');
// let operator = prompt('Xin nhập vào phép tính tương ứng(+, -, x, /) cho 2 số');

// let result;

// if(operator === '+') {
//     result = a + b;
// } else if(operator === '-') {
//     result = a - b;
// } else if(operator === 'x') {
//     result = a * b;
// } else if(operator === '/') {
//     result = a / b;
// } else {
//     result = 'Xin nhập phép tính hợp lệ (+, -, x, /)';
// }

// console.log(result);
