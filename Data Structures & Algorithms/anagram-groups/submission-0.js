class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hash = {};

        for(const s of strs){
            const key = s.split("").sort().join("");
            if(!hash[key]) hash[key] = [];
            hash[key].push(s)
        }

        return Object.values(hash)

    }   
}
