class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */


    longestConsecutive(nums: number[]): number {
        const hashTable: Map<number, number> = new Map()
        let longestSequence: number = 0
        
        for(let num of nums){
            const count = hashTable.get(num)
            if(count > 0){
                hashTable.set(num, count+1)
            }else{
                 hashTable.set(num, 1)
            }
        }


        for(let num of nums){
            if(!hashTable.has(num-1)){
                let currentNum = num
                let currentSequence = 0

                while(hashTable.has(currentNum)){
                    currentNum++
                    currentSequence++
                }

                if(currentSequence > longestSequence){
                    longestSequence = currentSequence
                }
            }
        }

        return longestSequence
    }
}
