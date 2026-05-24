class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
    const balance = new Map();
    for (const char of s) {
        balance.set(char, (balance.get(char) || 0) + 1);
    }
    for (const char of t) {
        const count = balance.get(char);
        if (!count) return false; 
        balance.set(char, count - 1);
    }    
    return true;
    }
}
