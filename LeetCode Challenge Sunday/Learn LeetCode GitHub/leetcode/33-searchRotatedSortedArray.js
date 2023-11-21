/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums === null || nums.length === 0){
        return -1;
    }
    
    let start = 0, end = nums.length - 1;
    
    while(start + 1 < end){
        let mid = parseInt((start + end)/2);     
        if(nums[mid] === target){
            return mid;
        }
        if(nums[start] < nums[mid]){
            if(nums[mid] >= target && target >= nums[start]){
                end = mid;
            } else {
                start = mid;                
            }
        } else {
            if(nums[end] >= target && nums[mid] <= target){
                start = mid;
            } else {
                end = mid;
            }
        }
    }
    if(nums[start] === target){
        return start;
    }else if(nums[end] === target){
        return end;
    }
    
    return -1;
};
