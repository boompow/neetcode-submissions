class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string, left: number, right: number): boolean {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            left++
            right--
    }

    return true
}

    validPalindrome(s: string): boolean {
        const alphaNumericS: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let left: number = 0
        let right: number = alphaNumericS.length -1

        while(left < right){
            if (alphaNumericS[left] !== alphaNumericS[right]) {
                return this.isPalindrome(alphaNumericS, left + 1, right) || this.isPalindrome(alphaNumericS, left, right-1)
            }
            left++
            right--
        }

        return true
    }
}
