const buaAn = {
  buaSang: "xoi",
  buaTrua: "pho",
  buaToi: "com",
};

const traiCay = ["cam", "quat", "mit"];

// console.log(`Sang nay toi an ${buaAn.buaSang}`);
// console.log(`Trua nay toi an ${buaAn.buaTrua}`);
// console.log(`Toi nay toi an ${buaAn.buaToi}`);

// console.log(`Qua so 0 la qua ${traiCay[0]}`);
// console.log(`Qua so 1 la qua ${traiCay[1]}`);
// console.log(`Qua so 2 la qua ${traiCay[2]}`);

// ===========================================

// const { buaSang, buaToi, buaTrua } = buaAn;

// console.log(`buaSang:`, buaSang);
// console.log(`buaTrua:`, buaTrua);
// console.log(`buaToi:`, buaToi);

// const [cam, quyt, mit] = traiCay;
// console.log("cam:", cam);
// console.log("quyt:", quyt);
// console.log("mit:", mit);

// ===========================================
// bai tap
const student = {
  name: "duynghiadev",
  age: 22,
};

const { age, name } = student;

console.log(`my name: ${name}`);
console.log(`my age: ${age}`);
