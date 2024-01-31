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
var lowestCommonAncestor = function(root, p, q) {
    if(root === null){
        return null;
    }
    let pathP = [], pathQ = [];
    findLCA(root, p.val, pathP);
    findLCA(root, q.val, pathQ);
    let len = Math.min(pathP.length, pathQ.length);
    for(let i = 0;i <= len;i++){
        if(!pathP[i] || !pathQ[i] || pathP[i].val !== pathQ[i].val){
            return pathP[--i];
        }
    }
    
    
};
var findLCA = function(root, target, list){
    list.push(root);
    if(target > root.val){
        findLCA(root.right, target, list);
    } else if(target < root.val){
        findLCA(root.left, target, list);
    }
}
