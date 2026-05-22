class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set();

        for(let n in nums){
            if(s.has(nums[n])) return true;
            s.add(nums[n]);
        }
    
    return false;
}
}