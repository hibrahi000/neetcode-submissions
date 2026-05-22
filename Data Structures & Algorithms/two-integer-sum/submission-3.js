class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * Pattern: 2 pointer 
     * target : Logic mapping and search for compliment
     * return : indicies 
     * 
     * 
     */
    twoSum(nums, target) {
      let m = new Map();

      for(let i = 0; i<nums.length; i++){
        let comp = target - nums[i] 
        if(m.has(comp)) return [m.get(comp), i];
        m.set(nums[i], i);
      }
    }
}
