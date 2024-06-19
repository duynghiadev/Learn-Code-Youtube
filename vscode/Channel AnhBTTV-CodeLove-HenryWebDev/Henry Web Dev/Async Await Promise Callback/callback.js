// problem
// const xinSoDt = () => {
//   let soDt;
//   console.log("Goi dien cho thang ban: Cho tao xin so thang Nam");
//   console.log("Thang ban dang tim so thang Nam");

//   setTimeout(() => {
//     soDt = 123456;
//     console.log("Da tim duoc so thang Nam");
//   }, 1000);

//   return soDt;
// };

// const soDtDaXin = xinSoDt();
// console.log(soDtDaXin);

// console.log("=".repeat(40));

//  =================================================

// wrong solution

// const xinSoDt_1 = () => {
//   let soDt;
//   console.log("Goi dien cho thang ban: Cho tao xin so thang Nam");
//   console.log("Thang ban dang tim so thang Nam");

//   setTimeout(() => {
//     soDt = 123456;
//     console.log("Da tim duoc so thang Nam");
//   }, 1000);

//   // bad solution
//   setTimeout(() => {
//     console.log("call number:", soDt);
//   }, 2000);
// };
// xinSoDt_1();

//  =================================================

// using callback function

// const xinSoDt_1 = (callback) => {
//   let soDt;
//   console.log("Goi dien cho thang ban: Cho tao xin so thang Nam");
//   console.log("Thang ban dang tim so thang Nam");

//   setTimeout(() => {
//     soDt = 123456;
//     console.log("Da tim duoc so thang Nam");
//     callback(soDt);
//   }, 1000);
// };

// const callback = (soDtDaNhan) =>
//   console.log(`Day la so dien thoai thang Nam: ${soDtDaNhan}`);

// xinSoDt_1(callback);

//  =================================================

// this is problem have many using callback function

const xinSoDt_1 = (callback) => {
  let soDt;
  console.log("Goi dien cho thang ban: Cho tao xin so thang Nam");
  console.log("Thang ban dang tim so thang Nam");

  setTimeout(() => {
    soDt = 123456;
    console.log("Day roi. Da tim duoc so thang Nam");
    callback(soDt, goiChoNam);
  }, 1000);
};

const sacPin = (soDth, hamGoiLaiSauKhiSacPin) => {
  console.log("Doi ti. Sac pin da");

  setTimeout(() => {
    console.log("Sac pin xong. Bat dau goi cho Nam");
    hamGoiLaiSauKhiSacPin(soDth);
  }, 2000);
};

const goiChoNam = (soDt) =>
  console.log(`Dang noi chuyen voi Nam sau khi goi vao so ${soDt}`);

// proceed with the entire process
xinSoDt_1(sacPin);
