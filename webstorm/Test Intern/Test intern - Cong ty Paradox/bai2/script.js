'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split('\n');
  main();
});

const readLine = () => inputString[currentLine++];

/*
 * Complete the 'getMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const getMin = (s) => {
  let open = 0;  // Count of unmatched opening parentheses
  let close = 0; // Count of unmatched closing parentheses

  for (const char of s) {
    if (char === '(') {
      open++;
    } else {
      if (open > 0) {
        open--;  // Match with an unmatched opening parenthesis
      } else {
        close++; // Unmatched closing parenthesis
      }
    }
  }

  // To balance the string, we need 'open' closing parentheses and 'close' opening parentheses
  return open + close;
};

const s1 = '())';
const s2 = '))((';
console.log(getMin(s1)); // Output: 1
console.log(getMin(s2)); // Output: 4

const main = () => {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = getMin(s);

  ws.write(result + '\n');
  ws.end();
};
