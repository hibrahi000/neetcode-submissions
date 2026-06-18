class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     *
     *
     * rotating sorted array + ascending order
     *
     * similar to previous problem BUT
     *
     * find target in rotated array.
     *
     * we know we can find the min by checking against the right most value to
     * determin to go right or left but now we need to account for the target number
     *
     * since the previous question was about finding the min we can manipulate that pathway and determine right most
     * range to the target and do the opposite aka flip
     *
     * in an effort to not overthink im just going to try it before fully playing it out and getting overwhelemed
     *
     */
    search(nums, target) {
        let [l, r] = [0, nums.length - 1];

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) return mid;

            if(nums[l] <= nums[mid]) // left side is sorted
            {
                if(nums[l]<= target && nums[mid]> target){
                    // go left 
                    r = mid-1;

                }
                else{
                    //go right 
                    l = mid+1
                }
            }
            else // right side is sorted
            {
                if(nums[mid]<target && nums[r] >= target){
                    //go right 
                    l = mid+1
                }
                else{
                    //go left
                    r = mid-1
                }

            }
          
        }

        return -1;
    }
}
