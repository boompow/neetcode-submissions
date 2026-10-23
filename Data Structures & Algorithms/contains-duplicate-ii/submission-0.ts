class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let hashTable: Map<number, number[]> = new Map()
        
        for(let i=0; i < nums.length; i++){
            const indices: number[] = hashTable.get(nums[i]) || []
            // check if there is already a duplicate value
            if(indices.length){
                for(let index of indices){
                    if(Math.abs(index-i) <=k){
                        return true
                    }
                }
            }

            hashTable.set(nums[i], [i, ...indices])
        }

        return false
    }
}
