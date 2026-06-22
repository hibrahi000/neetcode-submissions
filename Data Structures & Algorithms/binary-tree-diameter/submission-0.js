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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let d = 0;

        const depth = (node) => {
            if (!node) return 0;
            let l = depth(node.left);
            let r = depth(node.right);
            d = Math.max(d, l + r); // diamter is the full max length at the node from both sides !!!
            return 1 + Math.max(l, r);
        };

        depth(root);

        return d;
    }
}
