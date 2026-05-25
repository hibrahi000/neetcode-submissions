class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     *
     * two pointer problem
     * remove non numeric
     */

  
    isPalindrome(s) {
         const cleaned = [...s.toLowerCase()].filter(c => /[a-z0-9]/.test(c));
        return cleaned.join("") === cleaned.reverse().join("");
    }
}
