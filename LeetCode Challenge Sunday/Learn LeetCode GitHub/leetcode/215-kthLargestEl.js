/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 //like quick sort, devide and partition and find
 //kth largest means if the array is sorted increasingly, find the (length - k + 1) one 
 
 var findKthLargest = function(nums, k){
   if(nums === null || nums.length === 0 || k < 0){
     return 0;
   }
   //findPostion(nums, left, right, kth)
   return findPosition(nums, 0, nums.length - 1, nums.length - k + 1);
 }
 var position = function(nums, l, r, k){
   if(l === r){
     return nums[l];
   }
   //partition(nums, l, r)
   var position = partition(nums, l, r);
   if(position + 1 === k){
     return nums[position];
   } else if( position + 1 < k){
     return position(nums, position + 1, r, k);
   } else {
     return position(nums, l, position - 1, k);
   }   
 }
 var partition = function(nums, l, r){
   var left = l,
       right = r,
       pivot = nums[left];
   while(left < right){
     while(left < right && nums[right] >= pivot){
       right--;
     }
     nums[left] = right;
     while(left < right && nums[left] <= pivot){
       left++;
     }
     nums[right] = nums[left];   
   }
   nums[left] = pivot;
   return left;
 }
