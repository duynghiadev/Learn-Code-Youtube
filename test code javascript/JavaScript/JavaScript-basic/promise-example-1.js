/**
 * 1. new Promise
 * 2. then
*/

/** Promise có 3 trạng thái:
 * 1. Pendding: trạng thái đợi chờ
 * 2. Fulfilled: trạng thái thành công
 * 3. Rejected: trạng thái thất bại
*/
var promise = new Promise(function (resolve, reject) {
  // Logic
  // thành công thì => resolve()
  // thất bại thì => reject()
  // reject(); // gọi khi hàm thất bại => khi thất bại sẽ chạy vào hàm catch()
  resolve(); // gọi khi hàm thành công => khi thành công sẽ chạy vào hàm then()
});

promise
  .then(function () {
    console.log("Successfully");
  })
  .catch(function () {
    console.log("Failed");
  })
  .finally(function () {
    console.log("Done");
  });
