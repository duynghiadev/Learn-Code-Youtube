/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  //DO NOT use the default sort method like 'nums1.sort()'
  nums1.sort((a,b)=>a-b);
  nums2.sort((a,b)=>a-b);
  let result = [];
  while(nums1.length > 0 && nums2.length > 0) {
    if(nums1[0] > nums2[0]){
      nums1.shift();
    } else if (nums2[0] > nums1[0]){
      nums2.shift();
    } else {
      result.push(nums1.shift());
      nums2.shift();
    }
  }
  return result;
}
