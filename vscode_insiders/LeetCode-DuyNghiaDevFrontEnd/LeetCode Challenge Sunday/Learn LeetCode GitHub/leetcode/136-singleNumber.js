/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   var length = nums.length,
        i,
        result = 0;
    if (length === 1) {
        return nums[0];
    }
    for (i = 0; i < length; i++) {
        result = result ^ nums[i];// xor 运算
    }
    return result;
};
