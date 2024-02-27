/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums){
   let sum = 0, l = nums.length;
   if(l === 1 && nums[0] === 0){
     return 1;
   }
   if(l ===1 && nums[0] === 1){
     return 0;
   }
   for(let i = 0;i < l; i++){
     sum +=nums[i];
   }
   return l + l*(l-1)/2 - sum;
 }
