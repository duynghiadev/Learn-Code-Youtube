//************** Phần 9: Spread Operator **************
// Trường hợp nối mảng:
var array1 = ["JavaScript", "Nodejs", "Vue"];

var array2 = ["JavaScript", "Php"];

var array3 = [...array1, ...array2];

console.log(array3);
/**
 *  output: => [ "JavaScript", "Nodejs", "vue", "JavaScript", "php"]
 */
