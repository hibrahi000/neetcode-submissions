class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map();

        nums.forEach((n) => m.set(n, (m.get(n) || 0) + 1));

        let buckets = Array.from({ length: nums.length + 1 }, () => []);

        m.forEach((value, key) => {
            buckets[value].push(key);
        });

        let flattenBucket = buckets.flat();

        return flattenBucket.slice(-k);
    }
}
