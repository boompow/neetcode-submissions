class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let pointer: number = 1
        let value: number = nums[0]

        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== value){
                nums[pointer] = nums[i]
                value = nums[pointer]
                pointer++
            }
        }

        return pointer
    }
}
