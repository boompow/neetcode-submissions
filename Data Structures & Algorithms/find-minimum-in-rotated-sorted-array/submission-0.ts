class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // couldn't come up with the binary search solution on my own so I had to brute force it
        let min: number = nums[0]
        
        for(let num of nums){
            min = Math.min(min, num)
        }

        return min
    }
}
