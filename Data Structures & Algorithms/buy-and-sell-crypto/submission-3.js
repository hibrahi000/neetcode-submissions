class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     *
     *
     *
     * T - Trigger Words: single day and different day and future
     * A - Algorigthm: Sliding window two pointer
     * P - Protocol:
     * - our window size isnt given so we need to correct sliding window template
     *
     * - Determine what makes the window slide in from the
     * __ Left: since we want the biggest increase in proffit we move L to the right when
     * we reach a new low number
     * *** This means that we would need to keep track of the lowest number
     *
     * __ Right: we keep moving to the right with L being the lowest and measure out the difference with
     * R-L = proffit
     *
     * this also means we need to keep track of the max proffit and update everytime we move to the right with the given formula
     *
     *
     *
     * E - Edge Case
     * if there is a length of 1 there is no buy sell so we return 0
     * if there is a length of 2 we return the differnce of r -l if it is greater than 0 or return 0
     */
    maxProfit(prices) {
        let [l, maxProf] = [0,0];

        for (let r = 1; r < prices.length; r++) {
            // loop through array ( prices ) and if the price becomes less than the min replace the min at that value and continue with loop
            prices[l] > prices[r] ? (l = r) : (maxProf = Math.max(maxProf, prices[r] - prices[l]));
        }

        return maxProf;
    }
}
