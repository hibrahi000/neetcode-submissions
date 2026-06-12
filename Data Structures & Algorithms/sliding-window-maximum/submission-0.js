class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = [];
        const q = []; // stores indices

        for (let r = 0; r < nums.length; r++) {
            while (q.length && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }
            q.push(r);

            if (q[0] <= r - k) {
                q.shift();
            }

            if (r >= k - 1) {
                output.push(nums[q[0]]);
            }
        }

        return output;
    }
}
