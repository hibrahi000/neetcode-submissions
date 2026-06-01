class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     *
     * itterate and check formula
     * if min is left then increase pointer left to the next because we just want the larger size to be held
     * if min is right then decrease right
     * if calculated area is greater than max area then reset and continue while loop
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;
            let area = height * width;
            if (area > maxArea) maxArea = area;
            height == heights[left] ? left++ : right--;
        }
        return maxArea;
    }
}
