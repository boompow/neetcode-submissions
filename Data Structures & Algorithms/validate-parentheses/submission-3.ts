class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack: string[] = []

        for(let str of s){
            if(str === "("){
                stack.push(")")
            }else if(str === "["){
                stack.push("]")
            }else if(str === "{"){
                stack.push("}")
            }else if(stack.pop() !== str){
                return false
            }
        }

        return stack.length === 0
    }
}
