// đây là video 6
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

// charge baterry
const sacPin = () => {
  console.log("Đợi tí xạc pin đã");
  let chayPin;

  const thaoTacSacPin = new Promise((resolve, reject) => {
    setTimeout(() => {
      chayPin = false;

      if (!chayPin) {
        console.log("Sạc pin đầy. Bắt đầu gọi cho Nam");
        resolve();
      } else {
        reject("Cháy pin rồi, không gọi được");
      }
    }, 1500);
  });

  return thaoTacSacPin;
};

// call for Nam
const goiChoNam = (soDt) =>
  console.log(`Đang nói chuyện với Nam tại số: ${soDt}`);

// actions
const hanhDong = async () => {
  try {
    const soDt = await xinSoDt();
    try {
      await sacPin();
      goiChoNam(soDt);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
hanhDong();
