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
     * 
     * 
     * 
     * 
     * WRITING CODE LINE BY LINE 
     * 
     * first we initailize the return object maxArea and set to 0 since thats the smallest we could have
     * then we initialize the stack as a empty array 
     * 
     * now we are looping through the array in this case [7,1,7,2,2,4]
     * 
     * i is 0 
     * thus height[0] = 7 
     * and start = 0 because at this point since we are only at the first point we can only go left 0 times 
     * 
     * enter a while loop with the condition that the stack has a value and the current height is less than the height on top of the stack 
     * since we are planning to store the stack with the pair [index, height]
     * 
     * now we extract the values index and height for the top of the stack by popping it 
     * once we have the current height value and the last added stack item becasue we know the stack has something in it to compare nd that the current height is 
     * less than the top of the stack its time to measure the max area
     * 
     * we measure the max area by getting the max of what we currently have as the max area and the height at the top of stack and the current index - the stored index for that height 
     * 
     * --> this is where we arent connecting the dots ... but i will continue 
     *      * -->> EXPLINATION OF area calculation 
     * so the height that we just popped 
     * what we are storing in the stack is the following [start, height]
     * the index value stored in start is telling us how far to the left can we move at a given point i for the height 
     * so to calculate the max area we know the start point and we know the current index as we are going to left and right 
     * thus if we have the start index and the right most index we can calculate the width which is i( which will always be more in this case ) - start
     * thus its a positve number and acts as the width and this leads to the height * width = area and then we see is this area the most calculated in the loop 
     * 
     * but since we know everything in the stack thats popped is greater than the previous popped item we can keep going left until we cannot and thus we reset the start
     * value we have outside of the popped stack value. as we are resetting the width start and consuming the previous area unused by the next heights[i] value and index
     * 
     * ---->>> THIS IS ALSO WHERE IM SLIGHTLY confused im trying to wrap my mind and visualize this, we only evaluate to the left when what? and why is this condition made 
     * ---->>> ANSWER ---->>> 
     * - so we only look back when we have reached a bar thats shorter than the last item on the stack. 
     * why? because the shorter bar is the limiter because the shorter bar doesnt have enough body to help extend the previous unresolved bar in the stack 
     * so now that we know the last bar on the stack cant go farther we evaluate the start that we have stored with that height to the current end 
     * limiting index and pop it. and reset the start index we have atm 
     * 
     * with the max area now set we need to change the start to the index that we just popped ... --> ( also this is confusing as to why we are doing this )
     * 
     *      * -->> EXPLINATION OF SETTING INDEX 
     * so because we pop the current bar we are saying this bar cannot be extended to the right no more because of the next bar in line as its 
     * shorter but we know that the start position of the bar we popped would still work for the next bar because its more. so to perserve the 
     * height of the potential rectangle the lower bar can make we set the start back and we keep doing this to keep track of how far left we can go 
     * without the popped bar 
     * 
     * 
     * 
     * we are now out the while loop because the stack is empty or that the next height is larger than the previous stack value meaning we can continue to 
     * extend the hight to the right so if thats the case we push it onto the stack as we are keeping track of the limits assuming we can keep moving it to the right 
     * until we get a smaller number next 
     * 
     * 
     * once we go through the entire array we should have calculated the max area on the first pass going from left to right but what about going right to left 
     * what ever is left in the stack could extend to the left and we need to go through it in that direction so we loop as long as the stack 
     * has something to consider.
     * 
     * and again we pop and extract the index and height values 
     * and reasign the max area depending on whats greater but this time we are multiplying the height and since we know the outter bounds of the array we 
     * use the length of the heights array minus the current index which should give us the estimated remaining width to the left from the right side
     * 
     * and update accordingly 
     * 
     */

    largestRectangleArea(heights) {
        let maxArea = 0; 
        let stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i; //( how far left current bar can extend)
            let currHeight = heights[i];

            while (stack.length && currHeight < stack.at(-1)[1]) {
                const [startIndex, barHeight] = stack.pop();
                maxArea = Math.max(maxArea, barHeight * (i - startIndex));
                start = startIndex;
            }

            stack.push([start, currHeight]);
        }

        while(stack.length){
            const [startIndex, barHeight] = stack.pop();
             maxArea = Math.max(maxArea, barHeight * (heights.length - startIndex));
        }

        return maxArea;
    }
}
