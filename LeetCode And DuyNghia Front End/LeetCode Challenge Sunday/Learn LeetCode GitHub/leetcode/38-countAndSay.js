/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth sequence.
 * Note: The sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
   if(n===0){
     return "";
   }
   if(n===1){
     return 1;
   }
   let s = countAndSay(n - 1);
   let counter = 1,target = s.charAt(0), result = [];
   for(let i = 1;i < s.length;i++){
     if(s.charAt(i) === target){
       counter++;
     } else {
       result.push(counter);
       result.push(target);
       counter = 1;
       target = s.charAt(i);
     }
   }
   result.push(counter);
   result.push(target);
   return result.join('');
 }
