class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     *
     */
    minWindow(s, t) {
        if (t.length == 0) return "";

        let l = 0;
        let minLength = -1;
        let minSubString = "";

        let needMap = {};
        let haveMap = {};

        let needCount = 0;
        let haveCount = 0;

        for (const c of t) {
            // lets add the needs first and the count of what we will require
            needMap[c] = (needMap[c] || 0) + 1;
        }
        needCount = Object.keys(needMap).length;

        for (let r = 0; r < s.length; r++) {
            // begin the window growth with r with l beginning at 0
            if (needMap[s[r]] != undefined) {
                haveMap[s[r]] = (haveMap[s[r]] || 0) + 1; // increase what we have since this is something we need
                if (needMap[s[r]] === haveMap[s[r]]) {
                    haveCount++;
                    

                    while (haveCount === needCount) {
                        // check minimum FIRST
                        if (minLength === -1 || r - l + 1 < minLength) {
                            minLength = r - l + 1;
                            minSubString = s.substring(l, r + 1);
                        }
                        // then try to shrink
                        if (needMap[s[l]] != undefined) {
                            haveMap[s[l]] -= 1;
                            if (haveMap[s[l]] < needMap[s[l]]) {
                                haveCount--;
                            }
                        }
                        l++;
                    }
                }
            }
        }

        return minSubString;
    }
}
