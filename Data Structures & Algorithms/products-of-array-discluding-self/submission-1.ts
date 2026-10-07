class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixProduct:number = 1
        let postfixProduct:number = 1
        let prefixArray: number[] = []
        let postfixArray: number[] = []
        let productsArray: number[] = []

        for(let i =0; i < nums.length; i++){
            prefixArray.push(prefixProduct)
            prefixProduct *= nums[i]
        }

        for(let i =nums.length-1; i > -1; i--){
            postfixArray.push(postfixProduct)
            postfixProduct *= nums[i]
        }

        postfixArray.reverse()

        for(let i =0; i < nums.length; i++){
            productsArray.push(prefixArray[i]*postfixArray[i])
        }

        return productsArray

    }
}
