const sum_5 = (x: number, y: number, z?: number) => {
  if (z) return x + y + z;
  return x + y;
};

console.log(">>> check sum 4 = ", sum_5(2, 5), sum_5(1, 2, 3)); //NaN có nghĩa là: not a number;; null/ undefined
