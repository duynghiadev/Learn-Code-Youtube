// setInterval
// clearInterval
// setInterval(fn, ms);

// var i = 0;
// var intervalId = setInterval(function () {
//   ++i;
//   console.log(i);
//   if (i === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// Example SetTimeout
// Write a function count from 1 to 10
// return a promise

/**
 * Solution 1:
 */

// function count(a, b) {
//   return new Promise(function (resolve, reject) {
//     var ID = setInterval(function () {
//       console.log(a);
//       a++;
//       if (a > b) {
//         clearInterval(ID);
//         resolve();
//       }
//     }, 500);
//   });
// }

// count(1, 10).then(function () {
//   console.log("Done");
// });

/**
 * Solution 2:
 */
// function countFrom(a, b) {
//   return new Promise(function (resolve, reject) {
//     if (a > b) {
//       reject("Invalid parametres");
//     } else {
//       var intervalId = setInterval(function () {
//         console.log(a);
//         if (a === b) {
//           clearInterval(intervalId);
//           resolve();
//         } else {
//           ++a;
//         }
//       }, 1000);
//     }
//   });
// }

// countFrom(1, 10)
//   .then(function () {
//     console.log("Done");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

/**
 * Solution 3:
 */

// function countFromOneToTen() {
//   return new Promise((resolve, reject) => {
//     let count = 1;

//     const interval = setInterval(() => {
//       console.log(count);
//       count++;

//       if (count > 10) {
//         clearInterval(interval);
//         resolve();
//       }
//     }, 500);
//   });
// }

// countFromOneToTen()
//   .then(() => {
//     console.log("Counting completed!");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

/**
 * Solution 4:
 */

function countFromOneToTenAdvanced() {
  return new Promise((resolve, reject) => {
    let count = 1;
    let sum = 0;

    const interval = setInterval(() => {
      console.log(count);
      sum += count;
      count++;

      if (count > 10) {
        clearInterval(interval);
        resolve(sum);
      }
    }, 500);
  });
}

countFromOneToTenAdvanced()
  .then((result) => {
    console.log("Tổng các số từ 1 đến 10:", result);
  })
  .catch((error) => {
    console.error("Đã xảy ra lỗi:", error);
  });
