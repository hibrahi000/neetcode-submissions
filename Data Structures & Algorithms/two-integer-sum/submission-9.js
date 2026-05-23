class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();
        let res;

        nums.find((num, i) => {
            const comp = target - num;
            if(m.has(comp)) {
                res = [m.get(comp), i];
                return true
            }
            m.set(num, i);
        })

        return res

        
        

    }
}
