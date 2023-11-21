/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
   let hashMap = {}, result = [];
   for(let i = 0; i < nums.length; i++){
     hashMap[nums[i]] = true;
   }
   for(let j = 0;j < nums.length; j++){
     if(!hashMap[j]){
       result.push(j);
     }
   }
   return result;
 }
 
