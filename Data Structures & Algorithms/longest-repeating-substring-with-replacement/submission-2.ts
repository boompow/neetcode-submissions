class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        // failed to solve this on my own. this is based on the solution video 
        let left: number = 0
        let maxLength: number = 0
        let maxCount: number = 0
        let hashTable: Map<string, number> = new Map()

        for(let right=0; right < s.length; right++){
            // count each character frequency and current subarray length
            let currentCount = 1 + (hashTable.get(s[right]) || 0)
            hashTable.set(s[right], currentCount)

            maxCount = maxCount > currentCount ? maxCount : currentCount

            // lets find if the current substring is valid
            // this is the condition needed to move the left pointer forward

            while((right-left + 1) - maxCount > k){
                hashTable.set(s[left], (hashTable.get(s[left])!-1))
                left++
            }

            maxLength = maxLength > (right-left + 1) ? maxLength : (right-left + 1)
        }

        return maxLength

        
    }
}
