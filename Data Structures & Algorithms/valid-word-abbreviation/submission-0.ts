class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    isDigit(code:number){
        if(code >= 48 && code < 58){
            return true
        }

        return false
    }

    isAlpha(code:number){
        if((code >= 65 && code < 91) ||(code >= 97 && code < 123)){
            return true
        }

        return false
    }

    validWordAbbreviation(word: string, abbr: string): boolean {
        let n: number = word.length
        let m: number = abbr.length

        let nPointer: number = 0
        let mPointer: number = 0

        while(nPointer < n && mPointer < m){
            if(abbr[mPointer] === "0") return false

            if(word[nPointer] === abbr[mPointer]){
                nPointer ++
                mPointer ++
            }else if(this.isAlpha(abbr.charCodeAt(mPointer))){
                return false
            }else{
                let numLen: number = 0

                while(mPointer < m && this.isDigit(abbr.charCodeAt(mPointer))){
                    numLen = numLen * 10 + Number(abbr[mPointer])
                    mPointer ++
                }

                nPointer += numLen
            }
        }

        return nPointer === n && mPointer === m
    }
}
