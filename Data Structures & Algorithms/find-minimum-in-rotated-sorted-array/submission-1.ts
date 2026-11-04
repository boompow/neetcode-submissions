class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l: number = 0
        let r: number = nums.length-1
        let min: number = nums[0]

        while(l<=r){
            if(nums[l] <= nums[r]){
                min = Math.min(min, nums[l])
                break
            }

            let m: number = Math.floor((l+r)/2)
            min = Math.min(min, nums[m])

            if(nums[m] >= nums[r]){
                // if this condition is satisfied we can be sure that the min is in the sorted subarray to the left of the mid
                l= m+1
            }else{
                r= m-1
            }
        }

        return min
    }
}
