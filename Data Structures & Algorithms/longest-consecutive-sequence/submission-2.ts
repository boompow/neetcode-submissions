class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */


    longestConsecutive(nums: number[]): number {
        const numSet: Set<number> = new Set(nums)
        let longestSequence: number = 0
        
        for(let num of numSet){
            if(!numSet.has(num-1)){
               let currentSequence = 0
               while(numSet.has(num+currentSequence)){
                currentSequence ++
               }

               longestSequence = Math.max(longestSequence, currentSequence)
            }
        }

        return longestSequence
    }
}
