class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let s of strs) {
            let sorted = s.split("").sort().join("");
            if(map[sorted] === undefined)  (map[sorted] = []);
            map[sorted].push(s);
        }
        console.log(map);

        
        return Object.values(map);
    }
}
