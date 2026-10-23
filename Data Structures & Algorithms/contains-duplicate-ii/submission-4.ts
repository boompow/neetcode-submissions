class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if(k === 0) return false 

        let windowSet: Set<number> = new Set()
        let left: number = 0

        for(let right=0; right < nums.length; right++){
            while(right-left > k){
                windowSet.delete(nums[left])
                left ++
            }

            if(windowSet.has(nums[right])){
                return true
            }else{
                windowSet.add(nums[right])
            }
        }

        return false
    }
}
