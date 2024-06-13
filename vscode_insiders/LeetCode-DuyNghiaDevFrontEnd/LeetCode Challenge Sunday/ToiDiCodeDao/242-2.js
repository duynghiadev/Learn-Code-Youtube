var isAnagram = function (s, t) {
  const hashMap = {};

  for (const a of s) {
    hashMap[a] = (hashMap[a] || 0) + 1;
  }

  console.log({ hashMap });

  for (const b of t) {
    hashMap[b] = (hashMap[b] || 0) - 1;
  }

  return Object.values(hashMap).every((character) => character === 0);
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
