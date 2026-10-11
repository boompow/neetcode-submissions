class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let mergedString: string = ""
        let length = Math.max(word1.length, word2.length)

        for(let i =0; i < length; i++){
            if(i < word1.length){
                mergedString += word1[i]
            }
            
            if(i< word2.length){
                mergedString += word2[i]
            }
        }

        return mergedString
    }
}
