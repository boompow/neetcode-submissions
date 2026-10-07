class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixProduct:number = 1
        let postfixProduct:number = 1
        let productsArray: number[] =[]


        for(let i =0; i < nums.length; i++){
            productsArray.push(prefixProduct)
            prefixProduct *= nums[i]
        }

        for(let i =nums.length-1; i > -1; i--){
            productsArray[i] *= postfixProduct
            postfixProduct *= nums[i]
        }

        return productsArray

    }
}
