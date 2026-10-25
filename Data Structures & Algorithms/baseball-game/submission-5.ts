class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = []
        let sum: number = 0

        // assuming all operations are valid, we don't need to check the numbers
        for(let operation of operations){
            if(operation === "+"){
                const top: number = stack.pop()
                const newTop: number = top + stack[stack.length -1]
                stack.push(top)
                stack.push(newTop)
                sum += newTop
            }else if(operation === "C"){
                sum -= stack.pop()
            }else if(operation === "D"){
                stack.push(2*stack[stack.length-1])
                sum += stack[stack.length-1]
            }else{
                stack.push(Number(operation))
                sum += stack[stack.length-1]
            }
        }

        return sum
    }
}
