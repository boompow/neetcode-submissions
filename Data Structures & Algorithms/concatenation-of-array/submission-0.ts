class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans: number[] = []
        for(let i =0; i < 2* nums.length; i++){
            ans.push(nums[i % nums.length])
        }

        return ans
    }
}
