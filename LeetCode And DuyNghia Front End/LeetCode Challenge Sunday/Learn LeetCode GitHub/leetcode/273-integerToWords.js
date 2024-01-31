const words = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const words2 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const words3 = ["Thousand", "Million", "Billion"];

/**
 * @param {number} num
 * @return {string}
 */
 
var numberToWords = function(num) {
    var res = convertHundred(num % 1000);
    for (var i = 0; i < 3; i++) {
        num = parseInt(num / 1000);
        res = num % 1000 ? convertHundred(num % 1000) + " " + words3[i] + " " + res : res;
    }
   
    res = res.trim();  
    
    return !res.length ? "Zero" : res;
};
var convertHundred = function(num){
  var res, 
      a = parseInt(num / 100), 
      b = num % 100, 
      c = num % 10;
  res = b < 20 ? words[b] : words2[parseInt(b / 10)] + (c ? " " + words[c] : "");
  if (a > 0) {
    res = words[a] + " Hundred" + (b ? " " + res : "");  
  }
  return res;
}
