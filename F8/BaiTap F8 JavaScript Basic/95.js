function getRandNumbers(min, max, length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return result;
}
