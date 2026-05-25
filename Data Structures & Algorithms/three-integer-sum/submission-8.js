class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     *
     *
     * our target is 0
     * this is still a two pointer question but i can see if we change the
     * target to be nums k in the equation then it would be
     *
     * target is nums[k] which would be current
     * then we have the sub array of everything and since it needs to be distinct we need a HasSet
     *
     *
     * Protocol
     *
     * we initialize that we need
     * a set of all the numbers to work from
     * with that we can then use the loop and exclude the current number
     * and use the O(1) retrival to check if the target is curr
     * then the next num would be checked for
     *
     *
     * oh but we would also need to return all tripplets so thats different
     * and the triplets themselvs are distinct so thus we would then need to store it
     *
     *
     * how to solve
     * sort first
     * for each i, two pointer on i+1 to end
     * if sum == 0, push triplet
     * skip duplicates
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}