class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     *
     *
     *
     * T - Trigger Word: Longest Substring
     * A - Algorithm: Sliding Window
     * P - Protocol: TRSM
     *
     * --T - Tracking: both k ( number of replacements ) and distinct characters ( we need a Set for distinct) we also need to keep track of the most character type in the string
     * --R - Rule: if flips === 0 and the next character is not in the stack then we move l forward and increase k by 1 but it shouldnt be more than the origional k ammount
     * --S - Shrink L : move l forward when k is 0 and increase k
     * --M - Measure: max window size of consecutive substring when k is 0
     *
     *
     *
     * E -  Edge Case:
     *
     */
    characterReplacement(s, k) {
        let count = {};
        let maxFreq = 0;
        let l = 0;
        let result = 0;

        for (let r = 0; r < s.length; r++) {
            // 1. add s[r] to count
            count[s[r]] = (count[s[r]] || 0) + 1;
            // 2. update maxFreq
            maxFreq = Math.max(maxFreq, count[s[r]]);
            // 3. while rule broken: shrink
            while (r - l + 1 - maxFreq > k) {
                count[s[l]]--;
                l++;
            }
            result = Math.max(result, r - l + 1);
            // 4. update result
        }

        return result;
    }
}
