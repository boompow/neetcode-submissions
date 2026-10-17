class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let pointer1:number = 0
        let pointer2: number = heights.length -1
        let maxArea: number = 0

        while(pointer1 < pointer2){
            let currentArea: number = (pointer2 - pointer1) * Math.min(heights[pointer1], heights[pointer2])

            if(currentArea > maxArea){
                maxArea = currentArea
            }

            if(heights[pointer1] >= heights[pointer2]){
                pointer2 --
            }else if(heights[pointer1] < heights[pointer2]){
                pointer1++
            }
        }

        return maxArea

    }
}
