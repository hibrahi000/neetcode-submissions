class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length == 2) return [0, 1];
        let res = [];

        const m = new Map();
        nums.find((n, i) => {
            let comp = target - n;
            if (m.has(comp)) {
                res = [m.get(comp), i];
                return true;
            }
            m.set(n, i);
        });

        return res;
    }
}
