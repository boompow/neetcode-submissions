class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let pointer1: number = 0
        let pointer2: number = numbers.length -1

        while(pointer1 < pointer2){
            if(numbers[pointer1] + numbers[pointer2] < target){
                pointer1 ++
            }else if(numbers[pointer1] + numbers[pointer2] > target){
                pointer2 --
            }else{
                return [pointer1+1, pointer2+1]
            }
        }

        return []
    }
}
