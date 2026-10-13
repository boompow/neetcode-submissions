class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let zeroPointer: number = 0 // the zero pointer

        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                const temp = nums[zeroPointer];
                nums[zeroPointer] = nums[i];
                nums[i] = temp;

                zeroPointer++;
            }
        }
    }
}
