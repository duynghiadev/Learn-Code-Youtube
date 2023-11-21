/**
 * @param {number} num
 * @return {boolean}
 */
 var isUgly = function(num){
   if(num <=0){
     return false;
   } else if (num < 2){
     return true;
   } else if (num %2 === 0){
     return isUgly(num/2);
   } else if (num % 3 === 0){
     return isUgly(num/3);
   } else if (num % 5 === 0){
     return isUgly(num/5);
   } else {
     return false;
   }
 }
