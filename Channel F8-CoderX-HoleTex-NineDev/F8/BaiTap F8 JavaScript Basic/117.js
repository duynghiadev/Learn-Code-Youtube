function arrToObj(arr) {
  return arr.reduce((acc, cur) => {
    return { ...acc, [cur[0]]: cur[1] };
  }, {});
}

// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
