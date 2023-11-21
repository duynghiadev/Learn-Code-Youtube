/**
 * @param {number} n
 * @return {number}
 */
//better 
 var climbStairs = function(n) {
   let result = [1,1];
   for(let i = 2; i <= n; i++){
     result[i] = result[i-1] + result[i-2];
   }
   return result[n];
 }
// recursion
  var climbStairsRecursion = function(n) {
    if(n===0 || n===1){
      return 1;
    }
   return climbStairsRecursion[n-1] + climbStairsRecursion[n-2];
 }
