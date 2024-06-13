// let result = '';

// for(let i = 2; i <= 10; i++) {
//     result = result + `<div class="item">
//                         <h3>Bảng cửu chương ${i}</h3>
//                         <div class="number_wrapper">`;
//     // kết thúc tạo ra thẻ bao ngoài cho hàng i

//     // tạo ra hàng j
//     for(j = 2; j <= 10; j++) {
//         result = result + `<p>${i}x${j} = ${i*j}</p>`;
//     }

//     // đóng div thẻ loop i
//     result = result + `</div>
//                         </div>`;

// }

// // ok
// document.querySelector('.wrapper').innerHTML = result;

for (let i = 1; i <= 5; i++) {
  let result = ''

  for (let j = 1; j <= i; j++) {
    result = result + '*'
  }

  //
  console.log(result)
}

// i = 1, j kết thúc --> tạo ra 1 *
// i = 2, j kết thúc --> tạo ra 2 *

// i = 5, j kết thúc --> tạo ra 5 *

// for(let i = 1; i <= 5; i++) {
//     let result = '';

//     for(let j = 1; j <= 5; j++) {

//         if(j <= 5 - i) {
//             result += ' ';
//         } else {
//             result += '*';
//         }

//     }

//     console.log(result);

// }

// <table>
//   <tr>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
//   </tr>
//   <tr>
//     <td>Alfreds Futterkiste</td>
//     <td>Maria Anders</td>
//     <td>Germany</td>
//   </tr>
//   <tr>
//     <td>Centro comercial Moctezuma</td>
//     <td>Francisco Chang</td>
//     <td>Mexico</td>
//   </tr>
// </table>

// let result = '';
// result = result + '<table>';

// for(let i = 1; i <= 10; i++) {

//     // in ra thẻ mở tr
//     result = result + '<tr>';

//     for(j = 1; j <= 10; j++) {
//         result = result + `<td>${i*j}</td>`;
//     }

//     result = result + '</tr>';

// }

// result = result + '</table>';
// document.write(result);

// 1. cho người dùng nhập vào số numbers (promp) 3 --> số lượng số nguyên tố để dừng chương trình
// 2. Cho người dùng nhập vào N (20)
// 3. Tạo 1 vòng lặp loop với biến khởi tạo i = 2; i <= N; i++
// 4. Khi numbers === connt (số lượng số nguyên tố) --> in ra các số nguyên tố thỏa mãn

// điểm dừng để in ra số các số nguyên tố thỏa mãn
let numbers = 3

// tìm từ 2 đến 20, khi nào đủ 3 số thì thoát vòng lặp
let countPrime = 0

for (let i = 2; i <= 20; i++) {
  let isPrime = true

  for (let j = 2; j < i; j++) {
    if (i % j === 0 && i !== 2) {
      // nó không phải số nguyên tố
      isPrime = false
    }
  }

  // nếu số nguyên tố tăng lên 1
  if (isPrime) {
    console.log(i + ' là số nguyên tố')
    countPrime = countPrime + 1
  }

  if (countPrime === numbers) {
    break
  }
}

// 10! = 1x2x3x4x5x6x ...10

for (let i = 1; i <= 10; i++) {
  let result = ''

  for (let j = 1; j <= 10; j++) {
    if (i + j <= 10) {
      result = result + ' '
    } else {
      result = result + '*'
    }
  }

  console.log(result)
}

// for(let i = 1; i <= 5; i++ ){

//     let star = '';

//     for(let j = 1; j <= 5; j++) {
//         if(i + j <= 5) {
//             star = star + ' ';
//         } else {
//             star = star + '*';
//         }

//     }
//     document.write(`${star}<br/>`);
// }

for (let k = 1; k <= 5; k++) {
  let result2 = ''

  for (let h = 1; h <= 10; h++) {
    if (k === 1 || k === 5) {
      result2 = result2 + '*'
    } else {
      if (h === 1 || h === 10) {
        result2 = result2 + '*'
      } else {
        result2 = result2 + ' '
      }
    }
  }
  document.write(`${result2}<br/>`)
}
