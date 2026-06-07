class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     *
     * TRIGGER:
     * - we are trying to find if the previous hight is the same and count the largest width aka group together the heights with the width as the distance
     * and then calculate the largest area
     *
     * PATTERN: stack mono
     * APPROACH:
     *
     * from what i know the design of the histogram is that we can determin a rectangle by the start point of contiguous rectangles with no gap
     *
     *
     * so to know if something could be a rectangle it means the hight can extend to the right and left of the baord but we need to determine in the
     * array of heights which points would break the length and how do we ensure we keep a record of the max area
     *
     *
     * 1st initialize
     * - maxarea
     * - stack to be used
     * - loop through array
     *
     *
     * 2- logical conditions
     * - when do we update maxArea ?
     * -> we update the next height is less than the current height, we cannot extend the height to the right if there is no space via the next block
     * - when do we pop off the stack ?
     * -> everytime we pop the stack. the popped bars area = (the popped bars height) * ( the current index - popped bars index )--> this would be the width of the area of this rectangle
     *
     * - initialize maxArea = 0, stack = []
     * - loop through heights with index i
     *   - track start = i (how far left current bar can extend)
     *   - while stack not empty AND current height < stack top height:
     *     - pop [index, height]
     *     - maxArea = max(maxArea, height × (i - index))
     *     - start = index ← current bar can extend back to here
     *   - push [start, heights[i]]
     *
     * - after loop, anything left in stack extends to end:
     *   - pop [index, height]
     *   - maxArea = max(maxArea, height × (heights.length - index))
     *
     * return maxArea
     *
     *
     * EDGE CASES:
     */

    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i; //( how far left current bar can extend)

            while (stack.length && heights[i] < stack[stack.length - 1][1]) {
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }

            stack.push([start, heights[i]]);
        }

        while(stack.length){
            const [index, height] = stack.pop();
             maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}
