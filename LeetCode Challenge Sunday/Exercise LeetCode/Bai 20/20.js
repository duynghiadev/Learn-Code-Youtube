var isValid = function (input) {
  if (input.length === 0) return true;

  const stack = [];
  const openChars = ["(", "[", "{"];
  const closeChars = [")", "]", "}"];

  for (const character of input) {
    const isOpenChar = ["(", "[", "{"].includes(character);
    if (isOpenChar) {
      stack.push(character);
    } else {
      const top = stack.pop();
      if (openChars.indexOf(top) !== closeChars.indexOf(character)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);