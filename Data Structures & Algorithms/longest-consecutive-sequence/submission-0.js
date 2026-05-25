class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     *
     *
     * we want sequences that are 1+ after its current spot to be a sequence
     * we need a function to check if its a valid sequence
     *
     * and we need to store them in a hashmap
     *
     * then pull out the one thats the longest ( we can have the length of it be the key and the sequence as the value )
     *
     * since its O(n) it means either multiple for loops passing through at seperate times or just a one pass
     *
     * im thinking we sort it from smallest to greatest
     * then as we go on we check if currentNumber + 1 == num[i+1]
     * if so then continue and add it to the hashmap as a counter.
     *
     * actually since we just want the greatest then what we can do is a one pass after the sort
     * and if the current counter is smaller then the is valid then continue if not update and keep going
     *
     *
     */

    longestConsecutive(nums) {
        const sortedNums = [...new Set(nums)].sort((a, b) => a - b);

        let count = 0;
        let tempCount = 0;

        console.log(sortedNums);
        //[ 2, 3, 4, 5, 10, 20 ]

        for (let i = 0; i < sortedNums.length; i++) {
            let currNum = sortedNums[i];
            tempCount++;
            // if the next number isnt consecutive and the temp count is higer then count replace it
            if (!(currNum + 1 == sortedNums[i + 1])) {
                if (tempCount > count) count = tempCount;
                tempCount = 0;
            }
        }

        return count;
    }
}
