class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     *
     * is anagram between two strings
     * how to find one - push pop of characters stored in object
     * now we just do it for s and t
     * if s has a size greater than t its not possible
     *
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const balance = new Int32Array(26);

        [...s].forEach((_, i) => {
            balance[s.charCodeAt(i) - 97]++;
            balance[t.charCodeAt(i) - 97]--;
        });

        return balance.every((b) => b === 0);
    }
}
