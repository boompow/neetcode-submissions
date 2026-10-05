class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashTable: Map<number, number> = new Map()

        for(let i of nums){
            const count = hashTable.get(i)

            if(count){
                hashTable.set(i, count+1)
            }else{
                hashTable.set(i, 1)
            }
        }

        let frequencyArr: [number, number][] = Array.from(hashTable.entries())

        let result: number[] = frequencyArr.sort((a,b)=>b[1]-a[1]).slice(0,k).map((entries)=>entries[0])


        return result
    }
}
