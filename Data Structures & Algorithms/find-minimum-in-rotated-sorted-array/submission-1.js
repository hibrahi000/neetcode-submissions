class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     *
     * we start ascening order ( binary search )
     *
     * then rotated between 1 and n times
     *
     * the array nums = [1,2,3,4,5,6]
     *
     * can become
     * - [3,4,5,6,1,2] -> rotation = 4
     * - [1,2,3,4,5,6] -> rotation = 6
     *
     *
     * *** We tried to assum the mechanism before looking at what they are asking
     *
     * we should store the knowldge first : we know if rotation is equal to nums.length then the whole thing is reset
     *
     * all elements are unique
     *
     * find the min in the array time constraint is O(log n) : DEF BINARY SEARCH
     *
     *
     *
     *
     * Im thinking:
     * do we have to use the rotation concept in a interesting way?
     * lets see if we can see a pattern in the rotation that would garuntee the pattern either is def left or right of the mid point
     * we have a mid point and we hold the min value in a outside var. we can start by checking if the current mid is less than
     * it then replace
     *
     * the loop would still apply because we would break when left is not less than the mid letting us know this is the rotation point
     * and thus the current mid is the lowest
     * so we could even not store the min value at this point because if the left number is greater than the current then we have reached the beginning
     * of the ascending order aka min
     *
     * ohhhh what we are trying to find is if the break in order is to the left or the right
     *
     */
    findMin(nums) {
        let [l, r] = [0, nums.length - 1];

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (l == r) return nums[mid];
            if (nums[mid] < nums[r]) r = mid;
            else l = mid + 1;
        }
    }
}
