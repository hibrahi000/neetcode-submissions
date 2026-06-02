class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = Math.min(val, this.minStack.length ? this.minStack[this.minStack.length - 1] : val);
        this.minStack.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
