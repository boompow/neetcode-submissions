class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const adjustedS:string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let leftIndex: number = 0
        let rightIndex: number = adjustedS.length -1

        while(leftIndex < rightIndex){
            if(adjustedS[leftIndex] !== adjustedS[rightIndex]) return false
            
            leftIndex++
            rightIndex--
        }

        return true
    }
}
