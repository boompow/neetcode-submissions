class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        let left: number = 0
        let right: number = nums.length-1

        while(left <= right){
            let mid: number = left + Math.floor((right-left) / 2)

            if(nums[mid] < target){
                left = mid+1
            }else if(nums[mid] > target){
                right = mid-1
            }else{
                return mid
            }
        }

        return left
    }
}
