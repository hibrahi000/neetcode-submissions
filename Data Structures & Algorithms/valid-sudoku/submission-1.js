class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     *
     * 3 rules
     * - check row if duplicates
     * - check col if duplicates
     * - 3x3 sub boxes if duplicates
     * range is 1-9 (index 0-8)
     *
     * since we are checking if there is a dup we need a set for set.has()
     * but we would also have multiple arrays so need to have coordinates / matrix so that means each
     * one would need its own hashmap ( row col and boxes )
     *
     * we also need to skip if value is "." ( maybe its better to store values like boolean = emptyBox for readability but thats optimization for later )
     *
     * we also need to calculate which subbox we are in we can do that by [(r/3),(c/3)]
     *we will also need a 2x2 loop so since we are working with coordinates
     */
    isValidSudoku(board) {
        // Protocol one initialize variables with sets for filled in for each index
        const rows = new Map();
        const cols = new Map();
        const boxes = new Map();

        const getSubBoxNum = (r, c) => `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                // skip if .
                if (board[r][c] === ".") continue;

                // if it doesnt exist add the new set
                if (!rows.get(r)) {
                    rows.set(r, new Set());
                }
                if (!cols.get(c)) {
                    cols.set(c, new Set());
                }
                if (!boxes.get(getSubBoxNum(r, c))) {
                    boxes.set(getSubBoxNum(r, c), new Set());
                }

                console.log(typeof rows.get(r));
                // console.log(cols);
                // console.log(boxes);

                // check for each then add if vaccant
                if (rows.get(r).has(board[r][c])) return false;
                rows.set(r, rows.get(r).add(board[r][c]));

                if (cols.get(c).has(board[r][c])) return false;
                cols.set(c, cols.get(c).add(board[r][c]));

                if (boxes.get(getSubBoxNum(r, c)).has(board[r][c])) return false;
                boxes.set(getSubBoxNum(r, c), boxes.get(getSubBoxNum(r, c)).add(board[r][c]));
            }
        }

        return true;
    }
}
