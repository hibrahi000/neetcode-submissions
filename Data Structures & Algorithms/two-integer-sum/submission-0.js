class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();
        let res = [];
        nums.forEach((num, i) => {
            let diff = target - num;
            console.log(m.has(diff));
            if (m.has(diff)) {
                res = [m.get(diff), i];
            }
            m.set(num, i);
        });
        return res;
    }
}
