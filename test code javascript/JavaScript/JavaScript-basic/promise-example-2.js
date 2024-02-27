/* 
  1.  promise.resolve
  2.  promise.reject
  3.  promise
*/

var promise1 = new Promise(function (reject) {
  setTimeout(function () {
    reject([1]);
  }, 1000);
});

var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 2000);
});

Promise.all([promise1, promise2]).then(function (result) {
  var result1 = result[0];
  var result2 = result[1];

  console.log(result1.concat(result2)); // [1, 2, 3] (concat: nối mảng). Mất tổng cộng 3s mới ra kết quả
});
