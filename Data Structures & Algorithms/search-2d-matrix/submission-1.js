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
        let [rows, COLS] = [matrix.length, matrix[0].length];

        let [l, r] = [0, rows * COLS - 1];

        while (l <= r) {

            
            let mid = Math.floor((l + r) / 2);
            

            let row = Math.floor(mid / COLS);
            let col = mid % COLS;

            let val = matrix[row][col];

            if (val < target) l = mid + 1;

            if (val > target) r = mid - 1;

            if (val === target) return true;

            // same three conditions as yesterday
        }
        return false;
    }
}
