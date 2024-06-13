/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
   let len = nums.length;
   if(target <= nums[0]){
       return 0;
   }
   if(target === nums[len-1]){
       return len-1;
   }
   if(target > nums[len-1]){
       return len;
   }
   for(let i = 1; i< len;i++){
       if(target === nums[i]){
           return i;
       } else if(target < nums[i] && target > nums[i-1]){
           return i;
       }
   }
 }
 
