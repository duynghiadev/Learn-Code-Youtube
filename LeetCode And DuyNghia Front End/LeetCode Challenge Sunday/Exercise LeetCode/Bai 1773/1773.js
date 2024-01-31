// page 36
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (const item of items) {
    switch (ruleKey) {
      case "type":
        if (item[0] === ruleValue) {
          count++;
        }
        break;
      case "color":
        if (item[1] === ruleValue) {
          count++;
        }
        break;
      case "name":
        if (item[2] === ruleValue) {
          count++;
        }
        break;
    }
  }
  return count;
};
console.time(`Testing2`);
console.timeEnd(`Testing2`);