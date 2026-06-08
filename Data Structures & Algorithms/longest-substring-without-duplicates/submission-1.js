class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let max = 0;
        let l = 0;

        for (let r in s ){
            
            while(set.has(s.charAt(r))){
                set.delete(s.charAt(l));
                l += 1

            }
            set.add(s.charAt(r));

            max = Math.max(max,set.size);

        }
        
        return max;
    }
}
