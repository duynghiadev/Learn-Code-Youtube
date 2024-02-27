/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  var _str = s.replace(/\s/g, '');
  if (!_str.length) return 0;

  return s.lastIndexOf(' ') === -1 ? s.length : s.lastIndexOf(' ');
}; 
