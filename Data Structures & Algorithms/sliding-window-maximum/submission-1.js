class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * story sentance : decreasing deque, pop back for value, pop front for position
     * front is arr[0]
     * back is arr[arr.length -1]
     */
    maxSlidingWindow(nums, k) {
        const output = [];
        const q = []; // stores indices, decreasing order of values

        for (let r = 0; r < nums.length; r++) {
            // pop back while nums[back] < nums[r]
            while (nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }

            // push r to back
            q.push(r);

            // pop front if it's out of window (front <= r - k)
            if (q[0] <= r - k) q.shift();
            // if window is full (r >= k-1), record max
            if (r >= k - 1) output.push(nums[q[0]]);
        }
        return output;
    }
}
