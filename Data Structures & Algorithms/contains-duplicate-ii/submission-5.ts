class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        if(k === 0) return false 

        let hashTable: Map<number, number> = new Map()

        for(let i=0; i< nums.length; i++){
            const duplicateIndex = hashTable.get(nums[i])

            if(i-duplicateIndex <= k) return true

            hashTable.set(nums[i], i)
        }

        return false
    }
}
