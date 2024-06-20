const buaAn = {
  buaSang: "xoi",
  buaTrua: "com",
  buaToi: "banh canh",
};

const bangChuCai = ["a", "b", "c"];

// ES5
for (const moiChuCai in bangChuCai) console.log("moiChuCai:", moiChuCai);
for (const moiBuaAn in buaAn) console.log("moiBuaAn:", moiBuaAn);

console.log("=".repeat(50));

// ES6
for (const moiChuCai of bangChuCai) console.log("moiChuCai:", moiChuCai);

// ===========================================
// search chat GPT
console.log("=".repeat(50));

Object.keys(buaAn).forEach((key) => {
  console.log(`${key}: ${buaAn[key]}`);
});

console.log("=".repeat(50));

// ===========================================
// bai tap
const name = "duynghiadev";
for (let character of name)
  console.log("character.toUpperCase():", character.toUpperCase());
