// ES6
// promise // asynchronous
const getAllDataFromDB = new Promise((resolve, reject) => {
  setTimeout(() => {
    var database = ["hanoi", "hochiminh", "danang"];
    resolve(database);
    // reject(new Error("da xay ra loi khi doc du lieu database"))
  }, 3000);
});

getAllDataFromDB
  .then((data) => console.log("data", data))
  // .catch((err) => console.log(err));

// ES5
// function getAllDataFromDB(callback) {
//   console.log("start");
//   setTimeout(() => {
//     var database = ["hanoi", "hochiminh", "danang"];
//     callback(database);
//     console.log("getting data from database");
//   }, 3000);
//   console.log("end");
// }

// getAllDataFromDB(function (data) {
//   console.log("data", data);
// });
