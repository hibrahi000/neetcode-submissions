class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * non negative numbers means we dont have to worry about negative size
     * each height at index represenst the height of a bar
     * each bar has a width of one
     *  this means that when calculating the width we pinch in the with by 2
     * since two bars would mean a width size of 2
     *
     *
     * but we need to see if there is space to trap watter or not
     * so what we can do is loop from left to right
     * determine if there is a gap aka the width is greater than 0
     * then calculate the area and add it to the maxArea
     *
     * logic needed to fufill is how to determine if the gap is valid
     *
     * case 1 is that width has to be greater than 0 between current bar and
     * the next bar aka we check to see if the min height is greater than 0. if so then its good
     *  we continue to increase i
     * then we can check forward that since there is a height greater than 0 we set the current
     * index as start and we keep going the height value is not 0. aka currHeight - nextHeight < 1
     * and currHeight - nextHeight > -1
     * we do this so that we make sure if the nextheight is larger then the current height
     * that we contain it to what the min height allows an log it
     * then we set the current height to the next height and continue from there
     *
     * if the next height is less then the current height we calculate the area and add to the a temporary max area
     * for that column until we reach the end of the next max height
     *
     * that way we ensure there is a outter limit
     *
     * if its 0 we increase the height value and then keep going
     * if
     *
     *
     */
    trap(height) {
        let l = 0,
            r = height.length - 1;
        let lMax = height[l],
            rMax = height[r];
        let res = 0;

        while (l < r) {
            if (lMax <= rMax) {
                l++;
                lMax = Math.max(lMax, height[l]);
                res += lMax - height[l];
            } else {
                r--;
                rMax = Math.max(rMax, height[r]);
                res += rMax - height[r];
            }
        }
        return res;
    }
}
