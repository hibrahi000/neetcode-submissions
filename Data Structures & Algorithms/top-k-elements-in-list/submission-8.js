class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length === 1) return nums;
        let freqMap = new Map();

        const bucket = Array.from({ length: nums.length } +1, () => []);

        for (const n of nums) {
            freqMap.set(n, (freqMap.get(n) || 0) + 1);
        }
        for(const [ num, count] of freqMap){
            bucket[count].push(num);
        };
        return bucket.flat().splice(-k);
    }
}
