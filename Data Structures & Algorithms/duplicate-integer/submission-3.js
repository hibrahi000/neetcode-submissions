class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 
     * 
     * we need to know if in an array is there a dup integer 
     * 
     * example 
     * [1,1,2,3] true
     * [1,2,3,4] false
     * []        false
     * [-1,1]    false
     * [-1,-1]   true 
     * 
     * output is boolean 
     * 
     * pattern: have i seen this before --> hashSet/hashMap
     * 
     * go through the array and check if in hashmap if no then add if yes then return true 
     * return true if array proves no 
     */

    hasDuplicate(nums) {
      return new Set(nums).size < nums.length
    }
}
