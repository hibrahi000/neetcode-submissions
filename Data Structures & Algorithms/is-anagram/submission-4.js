class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const balance = new Map();
        [...s].forEach((char) => balance.set(char, (balance.get(char) || 0) + 1));
        [...t].every((char) => balance.set(char, (balance.get(char) || 0) + -1));
        return balance.values().every((v) => v == 0);
    }
}
