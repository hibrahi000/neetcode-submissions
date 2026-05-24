class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        const row = new Map();
        const col = new Map();
        const square = new Map();

        const getBoxKey = (r, c) => {
            return `${[Math.floor(r / 3), Math.floor(c / 3)]}`;
        };

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {

                if (board[r][c] === ".") continue;
                if (!row.has(r)) row.set(r, new Set());
                if (!col.has(c)) col.set(c, new Set());
                if (!square.has(getBoxKey(r, c))) square.set(getBoxKey(r, c), new Set());

                if (
                    row.get(r).has(board[r][c]) ||
                    col.get(c).has(board[r][c]) ||
                    square.get(getBoxKey(r, c)).has(board[r][c])
                )
                    return false;

                row.set(r, row.get(r).add(board[r][c]) || new Set().add(board[r][c]));
                col.set(c, col.get(c).add(board[r][c]) || new Set().add(board[r][c]));
                square.set(
                    getBoxKey(r, c),
                    square.get(getBoxKey(r, c)).add(board[r][c]) || new Set().add(board[r][c]),
                );
            }
        }
        return true;
    }
}
