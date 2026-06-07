class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     *
     *
     * trigger :
     * - A car cannot pass another car ahead of it --> order matters
     * - If a car catches up it joins the fleet.   --> things merge based on condition
     * - things behind checking on things ahead and merging with conditions point to monotonic stack
     *
     * pattern: monotonic stack
     *
     * approach:
     *
     * ex 1 -> we see that target is 10 so the answer is 1
     * we have 2 positions
     * 1 -> 4 mph
     * 3 -> 2 mph
     *
     * position 0 needs to catch up 2 positions and since position 1 is moving at 2mph the first car needs to be faster than 2mph to even get there
     *
     * check if position 0 is greater than position 2 if not then hold
     *
     * if it is greater than check to see what the unit of time it will take to catch up aka we have
     * 2 positions to catch up
     * the difference in speed is 2
     * thus it will take 1 unit of time to advance by 2 positions
     *
     * since our target number is 10 we thus have 10 units of time to catch up and therefore the two positions will join making it 1 fleet
     *
     *
     *
     * if we apply the same logic to example 2
     *
     * index 0 : 4 -> 2mph
     * index 1 : 1 -> 2mph
     * index 2 : 0 -> 1mph
     * index 3 : 7 -> 1mph
     *
     *
     * we see that the positions are not in order might have to see about that
     *
     * we start with index 0 since this is the first one store it in the stack as [position, speed]
     *
     * now check index 1 - we see that the position is 1 and its also going at 2 mph since this is the greater position we put it on the stack
     *
     */
    carFleet(target, position, speed) {
        // since sorted position matters we need to handle a soted stack
        let stack = position.map((pos, idx) => [pos, speed[idx]]).sort((a, b) => b[0] - a[0]);
        let fleetCount = [];

        for (let n of stack) {
            let time = (target - n[0]) / n[1];
            if (fleetCount.length > 0 && fleetCount[fleetCount.length - 1] >= time) continue;

            fleetCount.push(time);
        }

        return fleetCount.length;
    }
}
