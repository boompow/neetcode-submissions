class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashTable: Map<number, number> = new Map()
        let result: number[] = []

        for(let i=0; i < nums.length; i++){
            hashTable.set(nums[i], i)
        }

        for(let i=0; i < nums.length; i++){
            const complementNum = target- nums[i]
            if(hashTable.has(complementNum)){
                const complementIndex =  hashTable.get(complementNum)
                hashTable.delete(complementNum)
                hashTable.delete(nums[i])
                if(complementIndex < i ){
                    result.push(complementIndex, i)
                }else if(complementIndex > i){ 
                     result.push(i, complementIndex)
                }
            }
         }

        return result
    }
}
