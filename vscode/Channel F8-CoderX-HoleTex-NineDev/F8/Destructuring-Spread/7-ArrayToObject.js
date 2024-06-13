/**
 * Thực hành sử dụng Enhanced object literals:
 * Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
 * Gợi ý: Sử dụng phương thức reduce
 */

function arrToObj(arr) {
  return arr.reduce((total, [key, value]) => {
    return { ...total, [key]: value };
  }, {});
}

const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);

const obj2 = arrToObj([
  ["name", "Duy nghia"],
  ["age", 20],
  ["address", "Da Nang"],
]);
console.log(obj2);
