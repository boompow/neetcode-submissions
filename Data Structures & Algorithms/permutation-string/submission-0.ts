class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    sortString(str:string): string{
        let strArr: string[] = str.split("")
        strArr.sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0))
        return strArr.join("")
    }

    checkInclusion(s1: string, s2: string): boolean {
        const sortedS1: string = this.sortString(s1)
        let left: number = 0

        for(let i=s1.length-1; i < s2.length; i++){
          const sortedSubString2: string =  this.sortString(s2.slice(left, i+1))
          if(sortedSubString2 === sortedS1){
            return true
          }else{
            left++
          }
        }

        return false
    }
}
