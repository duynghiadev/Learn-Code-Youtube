/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let numbers = [2, 7, 11, 15]
let target = 9

let twoSum = function (nums, target) {
	let map = [],
		result = []

	if (nums === null || nums.length === 0) {
		return result
	}

	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] != null) {
			result[0] = map[nums[i]]
			result[1] = i
			break
		} else {
			map[target - nums[i]] = i
		}
	}

	return result
}

console.time(`Testing:`)
console.timeEnd(`Testing:`)
