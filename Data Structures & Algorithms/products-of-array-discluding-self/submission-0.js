class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     *
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);
        let leftProduct = 1;

        for (let i in nums) {
            output[i] = leftProduct;
            leftProduct *= nums[i];
        }

        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= rightProduct; // multiply what's already there
            rightProduct *= nums[i]; // update for next iteration
        }

        return output
    }
}
