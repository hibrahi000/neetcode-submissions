class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let [row, col] = [matrix.length, matrix[0].length];
        let [l, r] = [0, row * col - 1];

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let val = matrix[Math.floor(mid / col)][mid % col];

            if (val > target) {
                r = mid - 1;
            } else if (val < target) {
                l = mid + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
