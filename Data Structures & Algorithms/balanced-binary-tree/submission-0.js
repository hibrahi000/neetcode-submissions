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
    isBalanced(root) {
        const dfs = (node) => {
            if (!node) return [true, 1];
            const l = dfs(node.left);
            const r = dfs(node.right);

            const height = 1 + Math.max(l[1], r[1]);
            const balance = l[0] && r[0] && Math.abs(l[1] - r[1]) <= 1;

            return [balance, height];
        };

        return dfs(root)[0];
    }
}
