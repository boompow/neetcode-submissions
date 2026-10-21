class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const sortedS1: string = s1.split("").sort().join("")
        let left: number = 0

        for(let i=s1.length-1; i < s2.length; i++){
          const sortedSubString2: string = s2.slice(left, i+1).split("").sort().join("")
          if(sortedSubString2 === sortedS1){
            return true
          }else{
            left++
          }
        }

        return false
    }
}
