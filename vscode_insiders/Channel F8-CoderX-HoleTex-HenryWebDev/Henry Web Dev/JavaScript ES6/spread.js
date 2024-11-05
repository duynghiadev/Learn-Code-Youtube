const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  buaToi: "pho",
};

const buaAn1 = {
  ...buaAn,
  buaChieu: "che",
};
console.log("buaAn1:", buaAn1);

const buaAn2 = {
  ...buaAn,
  buaTrua: "banh canh",
  buaToi: "di nhau",
};
console.log("buaAn2:", buaAn2);

const tapHopSo = [1, 2, 3];
const tapHopSo1 = [...tapHopSo, 4];
console.log("tapHopSo1:", tapHopSo1);

// ===========================================
// Bai tap
const students = {
  name: "duynghiadev",
  grade: 4,
};

const studentGraduate = {
  ...students,
  grade: 4.5,
  graduate: true,
};
console.log(`studentGraduate:`, studentGraduate);
