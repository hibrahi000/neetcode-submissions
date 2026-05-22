class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     *
     * anagram means the string has the same characters but just different order
     * so ex:
     *  s -> t : boolean
     * cat -> tac :true
     * stud -> duck : false
     *
     * pattern:
     * we need a hashset/hashmap : because we are checking to see if all chars exist
     * structure will be [character: frequency]
     * logic is we know the size is the same so for every character added to map
     * from s = freq+1
     * from t = freq-1
     *
     * if one of the values are not 0 then false
     *
     *
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false 
        
        let m = new Map();
        for (let i = 0; i < s.length; i++) {
            const numS = s.charAt(i);
            m.has(numS) ? m.set(numS, m.get(numS) + 1) : m.set(numS, 1);
        }

        for (let i = 0; i < s.length; i++) {
            const numT = t.charAt(i);
            if(m.has(numT)) m.set(numT, m.get(numT) - 1)
        }
        // blocked because we dont know how to check for if any values in the map is not 0
        // first idea is to go via object.entries.forEach
        // searched docs to see map has .values that brings back array of values

        // m.values().forEach(v => {if(v !== undefined) return false})
        // return true

        /**  running it is causing us to return true for
         * s="jar"
         * t="jam"
         * Map(4) { 'j' => NaN, 'a' => NaN, 'r' => 1, 'm' => 1 }
         * this implimentation might be able to work if i make some tweaks but
         * im feeling like if i just did m.forEach(k => (logic))
         * instead of m.values.forEach for some reason i feel like i need to make this version work that i shouldnt restart with something else why??
         **/

        /** we mistook irratible for array we dont need to do for each instead we do this  */
        console.log(m)
        for (const v of m.values()) {
            if (v !== 0) return false;
        }
        return true;

        
    }
}
