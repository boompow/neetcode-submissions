class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let mergedString: string = ""
        let pointer1: number = 0
        let pointer2: number = 0
        let word1L: number = word1.length
        let word2L: number = word2.length

        while(pointer1 < word1L || pointer2 < word2L){
            if(pointer1 >= word1L){
                mergedString += word2[pointer2]
            }else if(pointer2 >=word2L){
                mergedString += word1[pointer1]
            }else{
                mergedString += word1[pointer1] + word2[pointer2]
            }

            pointer1++
            pointer2++
        }

        return mergedString
    }
}
