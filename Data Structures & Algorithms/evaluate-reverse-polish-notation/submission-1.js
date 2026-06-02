class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let nums = [];
        for (let t of tokens) {
            if (["+", "-", "/", "*"].includes(t)) {
                const b = nums.pop();
                const a = nums.pop();

                if (t === "-") nums.push(a - b);
                if (t === "+") nums.push(a + b);
                if (t === "/") nums.push(Math.trunc(a / b));
                if (t === "*") nums.push(a * b);
            } else {
                nums.push(parseInt(t));
            }
        }
        return nums.pop();
    }
}
