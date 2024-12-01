// ask for phone number
const xinSoDt = () => {
  console.log("Gọi điện cho thằng bạn. Cho tao xin số của thằng Nam");
  console.log("Đang tìm...");

  const thaoTacTimKiem = new Promise((resolve, reject) => {
    let daTimThay;

    setTimeout(() => {
      daTimThay = true;
      if (daTimThay) {
        soDt = 123456;
        console.log(`Đây rồi. Số của nó là ${soDt}`);
        resolve(soDt);
      } else {
        reject("Tao không có số thằng Nam");
      }
    }, 1000);
  });

  return thaoTacTimKiem;
};

xinSoDt()
  .then((soDt) => console.log(`Đã xin được số thằng Nam: ${soDt}`))
  .catch((error) => console.log(error));

// ask for phone number -> then, charge the phone baterry -> then, call
// code này trong file promise_1.js (đây là code của video thứ 5)
