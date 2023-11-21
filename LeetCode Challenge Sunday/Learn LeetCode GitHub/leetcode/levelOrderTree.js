/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 example:
    3
   / \
  9  20
    /  \
   15   7
print1: [3,9,20,15,7]
print2: [
  [3],
  [9,20],
  [15,7]
]
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//print 1
var levelOrder = function (root) {
  var queue = [],
    result = [];
  if (root === null) {
    return result;
  }
  queue.push(root);
  while (queue.length) {
    var node = queue.shift();
    result.push(node.val);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return result;
};
var levelOrder2 = function (root) {
  var queue = [],
    result = [];
  if (root === null) {
    return result;
  }
  queue.push(root);
  while (queue.length) {
    var level = [],
      size = queue.length;
    for (var i = o; i < size; i++) {
      var node = queue.shift();
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(level);
  }
  return result;
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
