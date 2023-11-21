// 235. Lowest Common Ancestor of a Binary Search Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pVal = p.val;
  const qVal = q.val;
  const rootVal = root.val;

  if (pVal < rootVal && qVal < rootVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (pVal > rootVal && qVal > rootVal) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
