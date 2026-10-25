class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = []
        let brackets: Record<string, string> = {
            ']': "[",
            ")" : "(",
            "}" : "{"
        }

        for(let str of s){
            if(str === "(" || str === "[" || str === "{"){
                stack.push(str)
            }else{
                if(stack[stack.length -1] === brackets[str]){
                    stack.pop()
                }else{
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
