class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output:string = ""
        for(let str of strs){
            output += `${str.length}#${str}`
        }

        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let pointer = 0
        let output: string[] = []

        while(pointer < str.length){
            let hashIndex = str.indexOf("#", pointer)
            let length = Number(str.slice(pointer, hashIndex))
            output.push(str.slice(hashIndex + 1, hashIndex + 1 + length))
            pointer = hashIndex + 1 + length
        }

        return output
    }
}
