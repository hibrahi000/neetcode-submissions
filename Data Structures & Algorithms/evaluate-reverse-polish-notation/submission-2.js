class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let t of tokens) {
            if (["+", "-", "/", "*"].includes(t)) {
                const b = stack.pop();
                const a = stack.pop();

                if (t === "-") stack.push(a - b);
                if (t === "+") stack.push(a + b);
                if (t === "/") stack.push(Math.trunc(a / b));
                if (t === "*") stack.push(a * b);
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack.pop();
    }
}
