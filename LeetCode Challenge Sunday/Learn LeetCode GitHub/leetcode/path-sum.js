/**
  Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
  A leaf is a node with no children.
  https://leetcode.com/problems/path-sum/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  let currentTarget = targetSum - root.val;
  let left;
  let right;

  if (root.left === null && root.right === null && currentTarget === 0)
    return true;
  if (root.left === null && root.right === null) return false;

  if (root.left) {
    left = hasPathSum(root.left, currentTarget);
  }

  if (root.right) {
    right = hasPathSum(root.right, currentTarget);
  }

  return (left || right) ?? false;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
