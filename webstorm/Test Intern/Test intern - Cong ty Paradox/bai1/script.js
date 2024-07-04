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
 * Complete the 'areAlmostEquivalent' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY s
 *  2. STRING_ARRAY t
 */

const areAlmostEquivalent = (s, t) => {
  const n = s.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    const str1 = s[i];
    const str2 = t[i];
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);

    // Count frequency of each character in str1
    for (const char of str1) {
      freq1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Count frequency of each character in str2
    for (const char of str2) {
      freq2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Check if they are almost equivalent
    let almostEquivalent = true;
    for (let j = 0; j < 26; j++) {
      if (Math.abs(freq1[j] - freq2[j]) > 3) {
        almostEquivalent = false;
        break;
      }
    }

    result.push(almostEquivalent ? 'YES' : 'NO');
  }

  return result;
};

// Example usage
const s = ['aaabbc', 'aaaabbb'];
const t = ['bbaacc', 'aab'];
console.log(areAlmostEquivalent(s, t)); // Output: ['YES', 'NO']

const main = () => {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const sCount = parseInt(readLine().trim(), 10);
  const s = [];

  for (let i = 0; i < sCount; i++) {
    const sItem = readLine();
    s.push(sItem);
  }

  const tCount = parseInt(readLine().trim(), 10);
  const t = [];

  for (let i = 0; i < tCount; i++) {
    const tItem = readLine();
    t.push(tItem);
  }

  const result = areAlmostEquivalent(s, t);
  ws.write(result.join('\n') + '\n');
  ws.end();
};
