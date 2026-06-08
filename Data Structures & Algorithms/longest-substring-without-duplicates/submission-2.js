class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set(); // we need a datastructure to track dups
        let max = 0; // since we can start with 0 as the max size we set it to 0
        let l = 0; // since the first index is 0 we start with the left pointer at 0

        for (let r = 0; r < s.length; r++) {
            // we loop through the characters in the string s with the index being represented by r

            while (set.has(s.charAt(r))) {
                // we check if the set we have holds the character at r
                set.delete(s.charAt(l)); // we need to remove the character in the set because we need the substring to be contiguous
                l += 1; // if it does we need to shrink the window from the left side moving towards the r pointer
            }
            set.add(s.charAt(r)); // if we dont have a dup we add the character at index r and since the while loop cleans up the set should there be a
            // dup in any position we keep adding

            max = Math.max(max, set.size); // after the set has been cleaned and a new character has been added we calculate the new substring and
            // check to see if we need to update max
        }

        return max; // loop is done and we have the max size for the conditions set by the problem
    }
}
