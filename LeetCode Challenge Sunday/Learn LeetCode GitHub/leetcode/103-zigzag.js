/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  var result = [],
    currLevel = [],
    nextLevel = [],
    order = true;

  if (root === null) {
    return result;
  }

  currLevel.push(root);
  while (currLevel.length) {
    var level = [];
    while (currLevel.length) {
      var node = currLevel.pop();
      if (order) {
        if (node.left !== null) {
          nextLevel.push(node.left);
        }
        if (node.right !== null) {
          nextLevel.push(node.right);
        }
      } else {
        if (node.right !== null) {
          nextLevel.push(node.right);
        }
        if (node.left !== null) {
          nextLevel.push(node.left);
        }
      }
    }
    result.push(level);
    var tmp = currLevel;
    currLevel = nextLevel;
    nextLevel = tmp;
    order = !order;
  }
  return result;
}
