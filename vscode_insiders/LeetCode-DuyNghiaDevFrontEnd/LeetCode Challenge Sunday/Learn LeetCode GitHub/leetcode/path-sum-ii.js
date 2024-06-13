/**
  Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
  A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
  https://leetcode.com/problems/path-sum-ii/
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const results = [];

  helper(root, targetSum, results);

  return results;
};

const helper = function (node, targetSum, results, path = []) {
  if (node === null) return;
  const currentTarget = targetSum - node.val;

  path = path.concat(node.val);

  if (node.left === null && node.right === null && currentTarget === 0) {
    results.push(path);
  }

  helper(node.left, currentTarget, results, path);
  helper(node.right, currentTarget, results, path);
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
