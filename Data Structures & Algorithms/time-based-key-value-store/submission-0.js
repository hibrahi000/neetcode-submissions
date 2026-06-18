/* story : 
* time based 
key value : hashmap

*
*/

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ value, timestamp }); // since we know time is incrimenting this will always be array where the first is less than the last
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = "";
        let k = this.keyStore.get(key) || []; // this should be the array of [ {value, timestamp} , {value, timestamp} ]

        let [l, r] = [0, k.length - 1];
        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (k[m].timestamp <= timestamp) {
                res = k[m].value;
                l = m + 1;

            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
