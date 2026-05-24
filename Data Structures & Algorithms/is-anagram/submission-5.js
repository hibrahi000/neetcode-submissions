class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const balance = new Map();
        for (const char of s) {
            balance.set(char, (balance.get(char) || 0) + 1);
        }
        for (const char of t) {
            if (!balance.get(char)) return false;
            balance.set(char, (balance.get(char) || 0) - 1);
        }
        return balance.values().every((v) => v == 0);
    }
}
