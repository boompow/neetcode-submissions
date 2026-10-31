class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let stack: [number, number][] = []
        let maxArea: number = 0

        for(let i = 0; i < heights.length; i++){
            let finalIndex: number = i

            while(stack.length > 0 && stack[stack.length-1][1] >= heights[i]){
                const [index, height]: [number, number] = stack.pop()
                const currentArea: number = height * (i - index)
                maxArea = Math.max(currentArea, maxArea)

                finalIndex = index
            }

            stack.push([finalIndex, heights[i]])
        }

        for(let [index, height] of stack){
            const currentArea: number = (heights.length - index) * height
            maxArea = Math.max(currentArea, maxArea)
        }

        return maxArea
    }
}
