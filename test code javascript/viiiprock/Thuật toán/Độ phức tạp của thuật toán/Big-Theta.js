const linearSearch = (value, inputArray) => {
  for (let i = 0; i < inputArray.length; ++i) {
    if (value === inputArray[i]) {
      return i;
    }
  }
  return null;
};

const Arr = [10, 14, 26, 27, 31, 33, 35, 42, 44];

console.log(linearSearch(33, Arr));
