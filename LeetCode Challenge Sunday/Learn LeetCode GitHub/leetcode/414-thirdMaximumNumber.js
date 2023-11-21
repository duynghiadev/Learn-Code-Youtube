/**
 * Created by cmeng on 3/9/17.
 */
var thirdMax = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    if(nums.length < 3){
        return nums[0] > nums[1] ? nums[0] : nums[1];
    }
    let first = -(Math.pow(2, 53) - 1),
        second = -(Math.pow(2, 53) - 1),
        third = -(Math.pow(2, 53) - 1);
    for(let i = 0;i < nums.length;i++){
        let current = nums[i];
        if(current != first && current != second && current != third){
            if(current > first){
                third = second;
                second = first;
                first = current;
            } else if(current > second) {
                third = second;
                second = current;
            } else if(current > third) {
                third = current;
            }
        }
    }
    return third === -(Math.pow(2, 53) - 1) ? first : third;
}
