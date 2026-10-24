class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n: number = nums.length
        let ans: number[] = new Array(2* n)
        for(let i =0; i < n; i++){
            ans[i]= ans[n+i] = nums[i]
        }

        return ans
    }
}
