class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
     * ok for this we can do a solution where we take the product of all the items 
     * to the left of the array at index i and shift it over assuming that the starting 
     * value would be one hense there isnt anything that would be multiplied once the array 
     * would be done. Since we cannot use division we will use output array and write over it on 
     * one pass 
     * 
     * 
     * protocol : 
     * 1- initialize the variables we need
     * we need the output array we are returning and since we know the size will be of size nums and fill it in with 1's
     * we need a for loop to loop through the arrays 
     * and we need a starting value for when we got l-r and r-l aka 1 
     */
    productExceptSelf(nums) {

        let output = new Array(nums.length).fill(1);
        let leftProduct = 1;
        let rightProduct = 1;

        // now we populate the output array with the corresponding left products 
        for(let i =0; i< nums.length; i++){
            output[i] = leftProduct;
            leftProduct *= nums[i];
        }
        // i = 3
        // [ 1,1,2,8 ]
        // lp = 8



        // now we go from end to first so that we can multiply the the corresponding right  products 

        for(let i = nums.length -1; i>= 0; i-- ){
            output[i] *=  rightProduct;
            rightProduct *= nums[i];
        }

        // [1,2,4,6]

        // i = 3
        // [ 1,1,2,8 ]
        // rp = 1

        // now we can do a quick console.log to see if our output is fine 
        

        // and return the output 
        return output;




    }
}
