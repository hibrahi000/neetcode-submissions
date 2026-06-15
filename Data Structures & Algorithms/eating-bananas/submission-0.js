class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let min = 0;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            let hours = piles.reduce((total, piles) => total + Math.ceil(piles / mid), 0);

            if (hours <= h) {
                min = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return min;
    }
}
