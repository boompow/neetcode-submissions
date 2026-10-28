class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = []

        for(let token of tokens){
            if(token === "+"){
                const sum: number = stack.pop() + stack.pop()
                stack.push(sum)
            }else if(token === "-"){
                const right: number = stack.pop()
                const left: number = stack.pop()
                const difference: number = left - right
                stack.push(difference)
            }else if(token === "*"){
                const product: number = stack.pop() * stack.pop()
                stack.push(product)
            }else if(token === "/"){
                const right: number = stack.pop()
                const left: number = stack.pop()
                const division: number = left / right

                // round towards 0
                if(division < 0){
                    stack.push(Math.ceil(division))
                }else{
                    stack.push(Math.floor(division))
                }
            }else{
                stack.push(Number(token))
            }
        }

        return stack[0]
    }
}
