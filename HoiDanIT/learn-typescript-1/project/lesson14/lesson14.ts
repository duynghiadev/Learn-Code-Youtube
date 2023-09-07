enum API_STATUS {
  PENDDING, // 0
  REJECTED_1, // 1
  FULFILLED_2, // 2
  FULFILLED = "FULFILLED asfdasfasf",
  REJECTED = "REJECTED", //PROMISE
}

// Khai báo enum cũng giống như sử dụng constant. Nó chỉ khác ở điểm là dùng enum được nhóm các biến lại với nhau
// Trong java thì cũng có kiểu enum

/**
 * - Khi code Front end trong TypeScript mà sử dụng enum và code Back end Java thì enum mới có hiệu quả ✅
 * - Chứ code mình Front end không thôi mà cũng sử dụng enum thì mình nghĩ không có tác dụng gì hết ❌
 *
 * => Chung quy lại thì khi sử dụng enum ở phía Front end thì enum không có nhiều ý nghĩa. Bởi vì khi sử
 * dụng enum thì chúng ta chỉ nhận được index của mảng 🚀
 */

/**
 * - Khi ta sử dụng enum thì mình bắt buộc phải sử dụng kiểu này của nó khi sử dụng các thuộc tính bên trong
 * nó. Việc sử dụng như này cũng giúp chúng ta hạn chế lỗi khi chúng ta code tay và xảy ra lỗi typo ✅
 * - Ở đây ví dụ của mình là enum API_STATUS 👇👇👇
 */
let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;
let a3 = API_STATUS.REJECTED;

//frontend : syntax
console.log(">>> a1 = ", a1);
console.log("\n>>> typeof a1 = ", typeof a1);

console.log("\n>>> typeof a2 = ", typeof a2);
console.log("\n>>> a2 = ", a2);

console.log("\n>>>  a3 = ", a3);
console.log("\n>>> typeof a3 = ", typeof a3);
