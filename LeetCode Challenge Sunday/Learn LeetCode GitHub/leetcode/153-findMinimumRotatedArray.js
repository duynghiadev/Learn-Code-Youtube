/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums === null || nums.length === 0){
    return 0;
  }
  var start = 0, end = nums.length - 1;
  while(start + 1 < end){
     var mid = Math.floor(start + (end - start)/2);
     if(nums[mid] > nums[end]){
       start = mid;
     } else {
       end = mid;
     }
  }
  return Math.min(nums[start], nums[end]);
}
