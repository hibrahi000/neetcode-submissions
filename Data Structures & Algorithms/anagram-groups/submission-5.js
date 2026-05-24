class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let m = new Map();
        
        for(const s of strs){
            const sorted = s.split("").sort().join();
            m.get(sorted)? m.get(sorted).push(s) : m.set(sorted, [s]); 
        }

        return [...m.values()]
    }
}
