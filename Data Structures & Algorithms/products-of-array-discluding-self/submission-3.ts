class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixProduct:number = 1
        let postfixProduct:number = 1
        let hashTable: Map<number, number> = new Map()


        for(let i =0; i < nums.length; i++){
            hashTable.set(i, prefixProduct)
            prefixProduct *= nums[i]
        }

        for(let i =nums.length-1; i > -1; i--){
            let getPrefixProduct = hashTable.get(i)
            hashTable.set(i, getPrefixProduct * postfixProduct)
            postfixProduct *= nums[i]
        }

        return Array.from(hashTable).map((item)=>item[1])

    }
}
