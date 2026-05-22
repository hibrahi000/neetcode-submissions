class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();

        for (let i=0; i< nums.length; i++) {
            let diff = target - nums[i];

            if (m.has(diff)) {
                return [m.get(diff), i];
            }
            m.set(nums[i], i);
        }
        return [];
    }
}
