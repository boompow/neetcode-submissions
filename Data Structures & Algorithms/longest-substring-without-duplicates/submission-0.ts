class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set: Set<string> = new Set()
        let maxLength: number = 0
        let left: number = 0

        for(let right=0; right < s.length; right++){
            const windowEnd: string =  s[right]
            
            while(set.has(windowEnd)){
                set.delete(s[left])
                left ++
            }

            set.add(windowEnd)
            maxLength = maxLength > set.size ? maxLength :set.size
        }

        return maxLength
    }
}
