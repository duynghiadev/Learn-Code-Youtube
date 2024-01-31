/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const visited = {};

  var cloneHelper = function (node) {
    if (node === null) {
      return null;
    }

    if (visited[node.val]) {
      return visited[node.val];
    }

    const clonedNode = new Node(node.val, []);
    visited[node.val] = clonedNode;

    for (let n of node.neighbors) {
      clonedNode.neighbors.push(cloneHelper(n));
    }

    return clonedNode;
  };

  return cloneHelper(node);
};
