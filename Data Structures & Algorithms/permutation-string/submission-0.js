class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     *
     * T - trigger word: substring
     *
     * A - Alhorithm: Sliding Window
     *
     * P - Protocol:
     *
     * --T - Tracking: is permutation? ( is s1 in s2 and if so has it been switched up)
     * --R - Rule : is the characters of s1 in s2 and if so are they contiguous
     * --S - Shrink L: if the next character in s2 isnt apart of s1 and if there isnt a count left for that letter then slide l forward and increase count for that letter
     * --M - true or false
     *
     *
     *
     * E - Edge Case:
     *
     *
     *
     */
    checkInclusion(s1, s2) {
        let l = 0;
        let freq = {};

        // fill in freq with s1
        for (let s of s1) {
            freq[s] = (freq[s] || 0) + 1;
        }

        for (let r = 0; r < s2.length; r++) {
            freq[s2[r]]--;

            if (r - l + 1 > s1.length) {
                freq[s2[l]]++;
                l++;
            }

            if (r - l + 1 === s1.length) {
                if ([...s1].every((c) => freq[c] === 0)) return true;
            }
        }

        return false;
    }
}
