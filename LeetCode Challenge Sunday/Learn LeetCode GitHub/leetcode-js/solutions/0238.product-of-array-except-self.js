/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefixProduct = [1];
  for (let i = 1; i < nums.length; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
  }

  const suffixProduct = [];
  suffixProduct[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixProduct[i] = suffixProduct[i + 1] * nums[i + 1];
  }

  const product = [];
  for (let i = 0; i < nums.length; i++) {
    product[i] = prefixProduct[i] * suffixProduct[i];
  }

  return product;
};
