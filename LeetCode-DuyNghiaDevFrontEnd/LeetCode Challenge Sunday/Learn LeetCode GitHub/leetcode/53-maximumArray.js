/*
  * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
  * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
  * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
  * @param {number[]} nums
  * @return {number}
*/
var maxSubArray = function(nums) {
    let maxn = -Number.MAX_VALUE;
    let sum = 0;
    for(let n of nums){
        sum += n;
        if(sum > maxn){
            maxn = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxn; 
};
