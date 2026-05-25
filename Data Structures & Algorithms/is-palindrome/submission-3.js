class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     *
     * two pointer problem
     * remove non numeric
     */

    isAlphaNum(c) {
        return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
    }

    isPalindrome(s) {
        let newS = "";

        for (const c of s) {
            if (this.isAlphaNum(c)) newS += c.toLowerCase();
        }

        return newS.split("").reverse().join("") === newS;
    }
}
