class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        let currentSum: number = 0
        let minLength: number = Infinity
        let left: number = 0

        for (let right = 0; right < nums.length; right++) {
            currentSum += nums[right]
            
            while (currentSum >= target) {
                minLength = Math.min(minLength, right-left+1)
                currentSum -= nums[left]
                left++
            }

        }

        return minLength === Infinity ? 0 : minLength
    }
}
