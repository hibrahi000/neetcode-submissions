class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hash = {};
        for (let i = 0; i < s.length; i++) {
            hash[s[i]] = (hash[s[i]] || 0) + 1;
            hash[t[i]] = (hash[t[i]] || 0) - 1;
        }

        return Object.values(hash).every((v) => v === 0);
    }
}
