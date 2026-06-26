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
     * @return {boolean}
     */
    isValidBST(root) {
        const validate = (root, min, max) => {
            if (!root) return true;
            if (root.val <= min || root.val >= max) return false; // we do less than or equal or greater than or equal because if we already have a estsablished min and max we cannot repeat
            return validate(root.left, min, root.val) && validate(root.right, root.val, max);
        };

        return validate(root, -Infinity, Infinity);
    }
}
