var TwoSum = function () {
  this.map = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  if (this.map.has(number)) {
    this.map.set(number, this.map.get(number) + 1);
  } else {
    this.map.set(number, 1);
  }
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  const keys = this.map.keys();
  for (let key of keys) {
    const current = this.map.get(key);
    const complement = value - key;

    if (complement === key) {
      if (current > 1) {
        return true;
      }
    } else {
      if (this.map.has(complement)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
