/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // base cases that we are returning 
        // if p and q are both null we return true 
        if(!p && !q) return true;
        // if one is null and the other isnt return false 
        if(!p || !q) return false;
        // if the values are not the same return false 
        if(p.val !== q.val) return false;
        

        return this.isSameTree(p.left,q.left) && this.isSameTree(p.right, q.right)


    }
}
