class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sHashTable: Map<string, number> = new Map()
        const tHashTable: Map<string, number> = new Map()

        if(s.length !== t.length) return false;

        for(let i=0; i < s.length; i ++){
            sHashTable.set(s[i], (sHashTable.get(s[i])??0) + 1)
            tHashTable.set(t[i], (tHashTable.get(t[i])??0) + 1)
        }

        for(let item of t){
            if(sHashTable.get(item) !== tHashTable.get(item)){
                return false
            }
        }

        return true
    }
}
