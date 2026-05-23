class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     * we need to make anagrams and store them
     * one loop to add anagram to a map but we can also sort it as a key 
     */
    groupAnagrams(strs) {

    let m  = new Map();

    strs.forEach(s => {
        const sortedS = s.split("").sort().join();
        if(!m.has(sortedS)) m.set(sortedS, [])
        m.set(sortedS, [...m.get(sortedS), s]);
    })
    return [...m.values()];
    }
}
