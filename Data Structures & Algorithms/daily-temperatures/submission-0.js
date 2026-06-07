class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     *
     * TRIGGER: future day with condition
     * PATTERN: STACK
     * APPROACH:
     *
     * have a mono stack that stores a array s[0] -> temp, s[1] -> index
     * since its decreasing if we find a temp that is greater than temp in the stack
     * we do as follows
     * s[1] -> the index to which we are populating the difference in the answers array
     * diff = currentIndex - s[1]  -> and this will be how many days it took to get higher
     *
     * while loop until
     * not greater and then store the current temp and index in the stack for future use
     *
     * we will prefill the array with 0s since we know that we have a n number of
     * answer indexs to fill
     *
     *
     *
     * EDGE CASES:
     * empty array return empty array;
     * if 1 value then return 1 array with 0 filled
     *
     */

    dailyTemperatures(temperatures) {
        // take care of edge case early
        if (temperatures.length === 0) return [];
        if (temperatures.length === 1) return [0];

        // initialize
        let stack = []; // this will hold a array at every stack [temp, index]
        let result = new Array(temperatures.length).fill(0); // prefill 0's to size of temperatures

        // begin
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                result[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1];
                stack.pop();
            }
            stack.push([temperatures[i], i]);
        }

        return result;
    }
}
