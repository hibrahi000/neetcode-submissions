class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sHash = {};
        let tHash = {};

        if(s.length !== t.length) return false;

        for(let i in s){
          (s[i] in sHash) ? sHash[s[i]] ++ : sHash[s[i]] = 1;
          (t[i] in tHash) ? tHash[t[i]] ++ : tHash[t[i]]= 1;
        }
        for(const key in sHash) {
        if((sHash[key] !== tHash[key]) ) return false 
        }

        return true
    }
}
