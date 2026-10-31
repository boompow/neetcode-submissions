class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // simpler naming
        let start: number = 0
        let end: number = nums.length - 1

        while(start <= end){
            const mid: number = start + Math.floor((end - start) / 2)

            if(nums[mid] > target){
                end = mid - 1
            }else if(nums[mid] < target){
                start = mid + 1
            }else{
                return mid
            }
        }

        return -1
    }
}
