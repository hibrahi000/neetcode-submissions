class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * we can store the max profit if its greater than 0 and update as i go on the array
     * we would need to store the min as i go on through the array and then store the
     * max diff from current value
     */
    maxProfit(prices) {
        let min = 1000;
        let maxProf = 0;

        for (let price of prices) {
            min = Math.min(min, price)
            maxProf = Math.max(maxProf, price - min)
        }

        return maxProf;
    }
}
