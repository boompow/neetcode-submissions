class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let stack: number[] = [0]
        let result: number[] = new Array(temperatures.length).fill(0)

        for(let i=1; i<temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
                let stackTop = stack.pop()
                result[stackTop] = i - stackTop
            }

            stack.push(i)
        }

        return result
    }
}
