/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let sumArr = [],
    countArr = [];
  var helper = function (node, level) {
    if (!node) {
      return;
    }
    if (!sumArr[level]) {
      sumArr[level] = 0;
    }
    sumArr[level] += node.val;
    if (!countArr[level]) {
      countArr[level] = 0;
    }
    countArr[level]++;
    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root, 0);
  return sumArr.map((sum, level) => sum / countArr[level]);
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
