class Solution {
    /**
     * @param {string} s
     * @return {number}
     *
     *
     * T - Trigger: Longest + substring
     * A - Algo : Sliding window
     * P - Protocol :
     *
     *  Questions to answer for Sliding window
     *
     * --T : Tracking : substring without duplicates -> HashSet
     * --R : Rule: if dup window broken
     * --S : Shrink: increase L  and remove from set and restart ( not complex just need if statement )
     * --M : Measure: max Length in this case set.size
     *
     *
     * E
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0;
        let max = 0;

        for (let r = 0; r < s.length; r++) {
            // setting window size of 0 to start

            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
