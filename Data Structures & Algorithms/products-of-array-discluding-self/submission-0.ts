class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product: number = 1;
        let zerosCount: number = 0
        let productsArray: number[] = []

        for(let num of nums){
            if(num === 0){
                zerosCount++
            }else{
                product *= num
            }
        }

        for(let num of nums){
            if(zerosCount === 0){
                productsArray.push(product/num)
            }else if(zerosCount === 1){
                if(num === 0){
                    productsArray.push(product)
                }else{
                    productsArray.push(0)
                }
            }else{
                productsArray.push(0)
            }
        }

        return productsArray

    }
}
