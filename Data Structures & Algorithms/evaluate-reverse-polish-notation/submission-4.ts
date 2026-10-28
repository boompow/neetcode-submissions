class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
         let stack: number[] = []

        for(let token of tokens){
            if(token === "+"){
                stack.push(stack.pop() + stack.pop())
            }else if(token === "-"){
                const right: number = stack.pop()
                const left: number = stack.pop()
                stack.push(left - right)
            }else if(token === "*"){
                stack.push(stack.pop() * stack.pop())
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

        return stack.pop()
    }
}
