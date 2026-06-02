class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        let closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        if (s.length %2 !== 0) return false;

        for (let c of s) {            
            if(closeToOpen[c]){
                if(stack.length !== 0 && stack[stack.length -1] ==closeToOpen[c]){
                    console.log(stack)

                    stack.pop();

                    console.log(stack)
                }
                else{
                    return false
                }
            }
            else{
                stack.push(c);
            }

        }
        return stack.length == 0;
    }
}
