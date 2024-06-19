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

// wrong solution

const xinSoDt_1 = () => {
  let soDt;
  console.log("Goi dien cho thang ban: Cho tao xin so thang Nam");
  console.log("Thang ban dang tim so thang Nam");

  setTimeout(() => {
    soDt = 123456;
    console.log("Da tim duoc so thang Nam");
  }, 1000);

  // bad solution
  setTimeout(() => {
    console.log("call number:", soDt);
  }, 2000);
};
xinSoDt_1();
