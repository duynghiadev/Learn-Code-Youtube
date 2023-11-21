/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if(n ===1 || n=== 7){
    return true;
  }
  if(n < 10){
    return false;
  }
  let sum = n.toString()
              .split('')
              .reduce(function(sum, digit) {
                return sum + (+digit * +digit); // syntax: arr.reduce(callback, [initialValue])
               }, 0);
    return isHappy(sum);
}
