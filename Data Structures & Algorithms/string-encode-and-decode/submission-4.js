class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     * we can encode by shifting over the char set number by a certain number since
     * they all work on a charNumber but i dont remember how to access the char number without looking it up 
     * what we could do is since this is a class and both functions would have access to 
     * the global object we can try something with a map that would hold the key value pairs 
     */
    
    encode(strs) {
         if (strs.length === 0) return "";
         
             return strs.map(s => `${s.length}||Start||${s}`).join("||End||");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];
        return str.split("||End||").map(s => s.split("||Start||")[1]);;
    }
}
