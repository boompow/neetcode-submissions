class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let arr: number[][] = []

        const numsSorted = nums.sort((a,b)=> a-b)

        for(let i=0; i< numsSorted.length-2; i++){
            if(i>0 && numsSorted[i] === numsSorted[i-1]) continue
            
            let leftPointer: number = i+1
            let rightPointer: number = numsSorted.length -1 

            while(leftPointer < rightPointer){
                const currentSum = numsSorted[i] + numsSorted[leftPointer] + numsSorted[rightPointer]

                if(currentSum < 0){
                    leftPointer++
                }else if(currentSum > 0){
                    rightPointer--
                }else{
                    arr.push([numsSorted[i], numsSorted[leftPointer], numsSorted[rightPointer]])

                    // skip duplicates
                    while(leftPointer < rightPointer && numsSorted[leftPointer] === numsSorted[leftPointer+1]) leftPointer++
                    while(rightPointer > leftPointer && numsSorted[rightPointer] === numsSorted[rightPointer-1]) rightPointer--

                    leftPointer++
                    rightPointer--
                }

            }
        }
        return arr
    }
}
