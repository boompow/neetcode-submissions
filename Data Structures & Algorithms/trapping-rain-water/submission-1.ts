class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let n: number = height.length
        if(n===0) return 0

        let prefixMax: number[] = new Array(n).fill(0)
        let suffixMax: number[] = new Array(n).fill(0)

        let total: number = 0

        for(let i=n-1; i>= 0; i--){
            if(i ===n-1){
                suffixMax[i] = height[n-1]
            }else{
                suffixMax[i] = suffixMax[i+1] > height[i] ? suffixMax[i+1]: height[i]
            }
        }

        for(let i=0; i< n; i++){
            // find the prefix max
            if(i ===0){
                prefixMax[i] = height[i]
            }else{
                prefixMax[i] = prefixMax[i-1] > height[i] ? prefixMax[i-1]: height[i]
            }


            // find the trapped water value
            const minHeight = prefixMax[i] < suffixMax[i]? prefixMax[i]: suffixMax[i]
            const trappedWater = minHeight - height[i]

            total += trappedWater 
        }

        return total
    }
}
