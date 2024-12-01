// *************** Cookies ***************
// document.cookie = `name=nghia; expires=${new Date(
//   "2022-07-22 10:00:00"
// ).toUTCString()}`;
// document.cookie = `age=20; expires=${new Date(
//   "2022-07-22 10:00:00"
// ).toUTCString()}`;

// console.log(document.cookie);

// *************** Local Storage **************
localStorage.setItem("name", "Nghia");
localStorage.setItem("age", 19);

console.log(localStorage.getItem("name"));

localStorage.removeItem("age");
// localStorage.clear(); // xoá tất cả các dữ liệu

// *********** Session Storage ******************
// sessionStorage.setItem("job", "IT");
// sessionStorage.setItem("age", 20);
