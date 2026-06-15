class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     *
     *
     *
     * plain english translation, in a list of lists where the lists are any length, check to see if any of the lists in the list have the target. do this efficiently
     */
    searchMatrix(matrix, target) {
        const [rows, cols] = [matrix.length, matrix[0].length];
        let [l, r] = [0, rows * cols - 1];

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const val = matrix[Math.floor(mid / cols)][mid % cols];

            if (val < target) l = mid + 1;
            else if (val > target) r = mid - 1;
            else return true;
        }
        return false;
    }
}
