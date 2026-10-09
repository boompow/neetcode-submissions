class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(key: number):boolean{
        if((key >= 48 && key <58) || 
            (key >=65 && key<91) || 
            (key>=97 && key<123)){
                return true
            }
        return false
        
    }

    isPalindrome(s: string): boolean {
        let leftIndex: number = 0
        let rightIndex: number = s.length -1

        while (leftIndex < rightIndex) {
            while (!this.isAlphaNumeric(s.charCodeAt(leftIndex)) && leftIndex < rightIndex) {
                leftIndex++
            }
            while (!this.isAlphaNumeric(s.charCodeAt(rightIndex)) && rightIndex > leftIndex) {
                rightIndex--
            }

            if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false

            leftIndex++
            rightIndex--
    }

        return true
    }
}
