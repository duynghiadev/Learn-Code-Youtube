let sum_7 = (x: number, y: number, z: boolean = false) => {
  if (z === false) {
    return x + y;
  }

  if (z) return x - y;
};

console.log(">>> check sum_7 = ", sum_7(1, 2), sum_7(1, 2, true));
