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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        // check to see if the root val is same as the subRoot val
        // if its not then there could be another subtree further down with that value
        // if it is then hit subroot left and subroot right
        // if subroot left is null and subroot right is null then return and the root left and root right is null and the root and subroot is the same
        // we have found out that it is true
        // but if its false then we need to check to see if there is potentially another subtree in root that might be a subroot
        // and continue. // now lets simplify this
        /**
         * first we check if the current root val is not null and the val is equal to the subroot val - if so we use root and subroot left and right
         * if its not equal we go down root left and root right but keep subroot
         *      this also might work if the root isnt equal all the way through the subroot we can then reset the subroot but we will need to
         *      store the subroot origin outside the function meaning we will need a arrow function
         * we return true if subroot tree left and root left is equal and root right and subroot right is equal this would be the break out
         * where we usually have false be the breakout
         */


        if(!root) return false;
        if(this.isSameSubTree (root, subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)


    }

    isSameSubTree = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q || p.val != q.val) return false;
        return this.isSameSubTree(p.left, q.left) && this.isSameSubTree(p.right, q.right);
    };
}
