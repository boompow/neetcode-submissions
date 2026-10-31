class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let startIndex: number = 0
        let endIndex: number = nums.length - 1

        while(startIndex <= endIndex){
            const middleIndex: number = startIndex + Math.floor((endIndex - startIndex) / 2)

            if(target < nums[middleIndex]){
                endIndex = middleIndex - 1
            }else if(target > nums[middleIndex]){
                startIndex = middleIndex + 1
            }else{
                return middleIndex
            }
        }

        return -1
    }
}
